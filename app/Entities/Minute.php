<?php

namespace Wactas\Entities;

class Minute extends Entity
{
    protected $fillable = ['name', 'code', 'site', 'office', 'next_meeting', 'objectives', 'agreements', 'requirements', 'project_id'];

    public function project()
    {
        return $this->belongsTo(Project::getClass(), 'project_id');
    }

    public function setCodeAttribute($project)
    {
        $correlative = $project->correlative + 1;
        if (strlen($correlative) === 1) {
            $correlative = '00'.$correlative;
        } elseif (strlen($correlative) === 2) {
            $correlative = '0'.$correlative;
        }

        $this->attributes['code'] = $project->customer->code.'-'.$project->type.'-'.date('dmY').'-'.$correlative;
    }

    public function setMeetingAtAttribute($value)
    {
        $value = explode('-', $value);
        $hours = explode(' ', $value[2]);
        $meeting_at = $hours[0].'-'.$value[1].'-'.$value[0].' '.$hours[1].':00';
        $this->attributes['meeting_at'] = $meeting_at;
    }

    public function scopeName($query, $name)
    {
        if (trim($name) != '') {
            $query->where('name', 'LIKE', "%$name%");
        }
    }
}
