import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany } from "typeorm";
import { Asset } from "./asset";
import { Person } from "./person";
import { DispatchComments } from "./dispatch-comment";



@Entity()
class Dispatch {

    @PrimaryGeneratedColumn('uuid')
    dispatch_id: string

    @ManyToOne(type => Asset, asset => asset.dispatches)
    asset: Asset

    @ManyToOne(type => Person, person => person.dispatches)
    person: Person

    @Column()
    dispatch_date: string

    @Column()
    dispatch_condition: string

    @Column({ type: 'bool', nullable: true })
    returned: boolean

    @Column({ nullable: true })
    return_date: string

    @Column({ nullable: true })
    return_condition: string

    @OneToMany(type => DispatchComments, comments => comments.dispatch)
    comments: DispatchComments[]


    constructor(dispatch_id: string, asset: Asset, person: Person, dispatch_date: string, dispatch_condition: string, returned: boolean,
        return_date: string, return_condition: string, comments: DispatchComments[]) {
        this.dispatch_id = dispatch_id
        this.asset = asset
        this.person = person
        this.dispatch_date = dispatch_date
        this.dispatch_condition = dispatch_condition
        this.returned = returned
        this.return_date = return_date
        this.return_condition = return_condition
        this.comments = comments

    }

}

export { Dispatch }