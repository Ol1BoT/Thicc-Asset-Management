import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
import { AssetType } from './asset-type'
import { AssetComment } from './asset-comment'
import { Dispatch } from './dispatch'


@Entity()
class Asset {
    @PrimaryGeneratedColumn({ type: 'uuid' })
    asset_id: string

    @Column()
    barcode: string

    @ManyToOne(type => AssetType, assetType => assetType.asset)
    assetType: AssetType

    @OneToMany(type => AssetComment, comment => comment.asset)
    comment: AssetComment[]

    @Column()
    condition: string

    @Column({ nullable: true, type: 'bool' })
    lost: boolean

    @Column({ nullable: true })
    lost_by: string

    @OneToMany(type => Dispatch, dispatch => dispatch.asset)
    dispatches: Dispatch[]



    constructor(asset_id: string, barcode: string, assetType: AssetType, comment: AssetComment[], condition: string, lost: boolean, lost_by: string, dispatches: Dispatch[]) {
        this.asset_id = asset_id
        this.barcode = barcode
        this.assetType = assetType
        this.comment = comment
        this.condition = condition
        this.lost = lost
        this.lost_by = lost_by
        this.dispatches = dispatches
    }
}

export { Asset }