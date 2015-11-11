<?php

namespace Wactas\Http\Controllers\Admin;

use Wactas\Http\Controllers\Controller;
use Wactas\Repositories\MinuteRepository;
use Wactas\Repositories\ProjectRepository;
use Wactas\Repositories\EmployeeRepository;
use Illuminate\Http\Request;
use Wactas\Http\Requests\MinuteRequest;
use Wactas\Entities\Minute;

//use Illuminate\Support\Facades\Session;

class MinutesController extends Controller
{
    /**
     * @var EmployeeRepository
     */
    private $employeeRepository;

    /**
     * @var ProjectRepository
     */
    private $projectRepository;

    /**
     * @var MinuteRepository
     */
    private $minuteRepository;

    public function __construct(
        MinuteRepository $minuteRepository,
        ProjectRepository $projectRepository,
        EmployeeRepository $employeeRepository
    ) {
        $this->minuteRepository = $minuteRepository;
        $this->projectRepository = $projectRepository;
        $this->middleware('select_customer');
        $this->employeeRepository = $employeeRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request, $id)
    {
        $name = $request->get('name');
        $minutes = $this->minuteRepository->filterPaginate($id, $name);

        return view('admin.minutes.list', compact('id', 'minutes', 'name'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create($id)
    {
        $project = $this->projectRepository->findOrFail($id);
        $employees = $this->employeeRepository->getEmployeeCustomer();
        $dataEmployees = array();

        return view('admin.minutes.create', compact('id', 'project', 'employees', 'dataEmployees'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(MinuteRequest $request)
    {
        $minute = new Minute($request->all());
        $project = $this->projectRepository->findOrFail($minute->project_id);
        $minute->code = $project;
        $minute->meeting_at = $request->get('meeting_at');
        dd($minute);
        $minute->save();

            // Add members to project
            $members = $request->get('employee_id');
        $this->addMembers($members, $project);

        Session::flash('success', 'Se agregó correctamente');

        return redirect()->route('admin.projects.edit', $project->id);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function update($id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
