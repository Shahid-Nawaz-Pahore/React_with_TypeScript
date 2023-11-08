

export type priorityType='high' | 'medium' | 'low'
export type noteProp ={
    text:string,
    priority?:priorityType
}

export type NoteType ={
    id:string,
    text:string,
    priority:priorityType
}