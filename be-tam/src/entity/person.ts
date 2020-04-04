import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Dispatch } from "./dispatch";


@Entity()
class Person {

    //System_id
    //company_person_id
    //company_department
    //person_first_name
    //person_last_name

    @PrimaryGeneratedColumn('uuid')
    person_id: string

    @Column({ nullable: true })
    company_person_id: string

    @Column({ nullable: true })
    company_department: string

    @Column({ nullable: true })
    person_first_name: string

    @Column({ nullable: true })
    person_last_name: string

    @OneToMany(type => Dispatch, dispatch => dispatch.person)
    dispatches: Dispatch



    constructor(person_id: string, company_person_id: string, company_department: string, person_first_name: string, person_last_name: string, dispatches: Dispatch) {
        this.person_id = person_id
        this.company_person_id = company_person_id
        this.company_department = company_department
        this.person_first_name = person_first_name
        this.person_last_name = person_last_name
        this.dispatches = dispatches
    }
}

export { Person }