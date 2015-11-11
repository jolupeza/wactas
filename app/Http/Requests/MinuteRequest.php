<?php

namespace Wactas\Http\Requests;

class MinuteRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
                'name' => 'required',
                'site' => 'required',
                'office' => 'required',
                'employee_id' => 'required',
                'meeting_at' => 'required|date',
            ];
    }
}
