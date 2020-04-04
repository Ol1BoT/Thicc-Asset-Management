import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Dispatch } from "./dispatch";



@Entity()
class DispatchComments {
    @PrimaryGeneratedColumn('uuid')
    dispatch_comment_id: string

    @Column()
    event_date: string

    @Column('text')
    dispatch_comment: string

    @CreateDateColumn()
    comment_creation_date: string

    @ManyToOne(type => Dispatch, dispatch => dispatch.comments)
    dispatch: Dispatch

    constructor(dispatch_comment_id: string, event_date: string, dispatch_comment: string, comment_creation_date: string, dispatch: Dispatch) {
        this.dispatch_comment_id = dispatch_comment_id
        this.event_date = event_date
        this.dispatch_comment = dispatch_comment
        this.comment_creation_date = comment_creation_date
        this.dispatch = dispatch
    }
}

export { DispatchComments }