export interface Teacher {
    name: string;
    lastname: string;
    email: string;
    password: string;
    class: string;
  }

  export interface Tutor {
    name: string;
    lastname: string;
    email: string;
    password: string;
    class: string;
    teacher:string;
    student:string;
    subject:string
    notes:string
  }

  export interface Student {
    name: string;
    lastname: string;
    email: string;
    password: string;
    class: string;
    teacher:string;
    student:string;
    subject:string
    notes:string
  }