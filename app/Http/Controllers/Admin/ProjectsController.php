<?php namespace Wactas\Http\Controllers\Admin;

use Wactas\Http\Controllers\Controller;
use Wactas\Repositories\ProjectRepository;
use Wactas\Entities\Project;
use Illuminate\Support\Facades\Session;
use Wactas\Http\Requests\ProjectRequest;
use Illuminate\Http\Request;
use Wactas\Repositories\EmployeeRepository;
use Wactas\Repositories\MemberRepository;

class ProjectsController extends Controller 
{

    /**
     * @var MemberRepository
     */
    private $memberRepository;

    /**
     * @var EmployeeRepository
     */
    private $employeeRepository;

    /**
     * @var ProjectRepository
     */
    private $projectRepository;

    public function __construct(
            ProjectRepository $projectRepository, 
            EmployeeRepository $employeeRepository,
            MemberRepository $memberRepository
    ) 
    {
        $this->projectRepository = $projectRepository;
        $this->employeeRepository = $employeeRepository;
        $this->memberRepository = $memberRepository;
        
        $this->middleware('select_customer');
    }
    
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index(Request $request)
	{
            $type = $request->get('typeProject');
	    $projects = $this->projectRepository->filterPaginate($type);
            return view('admin.projects.list', compact('projects', 'type'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
            $employees = $this->employeeRepository->getEmployeeCustomer();
            $dataEmployees = array();
            return view('admin.projects.create', compact('employees', 'dataEmployees'));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(ProjectRequest $request)
	{
	    $project = new Project($request->all());  
            $project->customer_id = Session::get('customer_id');
            $project->save();
            
            // Add members to project
            $members = $request->get('employee_id');            
            $this->addMembers($members, $project);
            
            Session::flash('success', 'Se agregó correctamente');
            return redirect()->route('admin.projects.edit', $project->id);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
	    $project = $this->projectRepository->findOrFail($id);
            $employees = $this->employeeRepository->getEmployeeCustomer();
            
            $dataEmployees = array();
            foreach ($project->employees as $employee) {
                $dataEmployees[] = $employee->id;
            }
            
            return view('admin.projects.edit', compact('project', 'employees', 'dataEmployees'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id, ProjectRequest $request)
	{
	    $project = $this->projectRepository->findOrFail($id);
            
            if (is_null($request->input('status')))
            {
                $project->status = 0;
            }
            
            // Add members to project
            $members = $request->get('employee_id');            
            $this->addMembers($members, $project);
            
            // Remove members to project
            $this->removeMembers($project, $members);
            
            $project->fill($request->all());
            $project->save();
            
            Session::flash('success', 'Se actualizó correctamente');
            return redirect()->back();
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id, Request $request)
	{
	    $project = $this->projectRepository->findOrFail($id);
            $success = $project->delete();
            
            if ($request->ajax()) {
                return response()->json(compact('success'));
            }
            
            Session::flash('danger', 'Se eliminó correctamente');
            return redirect()->route('admin.projects.index');
	}
        
        private function addMembers(array $members, Project $project)
        {
            // Add members to project
            foreach ($members as $member) {
                $employee = $this->employeeRepository->findOrFail($member);
                $this->memberRepository->add($employee, $project);
            }
        }
        
        private function removeMembers(Project $project, array $members)
        {
            foreach ($project->employees as $member) {
                if (!in_array($member->id, $members)) {
                    $employee = $this->employeeRepository->findOrFail($member->id);
                    $this->memberRepository->remove($employee, $project);
                }
            }
        }

}
