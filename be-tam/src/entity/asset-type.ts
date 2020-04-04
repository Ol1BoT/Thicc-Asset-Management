import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { Asset } from './asset'
import { AssetProject } from './asset-project'

@Entity({ synchronize: true })
class AssetType {
    @PrimaryGeneratedColumn({ type: 'uuid' })
    asset_id: string

    @Column({ nullable: false })
    asset_type: string

    @Column()
    delivery_date: string

    @Column()
    refresh_date: string

    @Column()
    asset_type_cost: string

    @OneToMany(type => Asset, asset => asset.assetType)
    asset: Asset[]

    @ManyToOne(type => AssetProject, assetProject => assetProject.asset_types)
    asset_project: AssetProject



    constructor(asset_id: string, asset_type: string, delivery_date: string, refresh_date: string, asset_type_cost: string, asset: Asset[], asset_project: AssetProject) {
        this.asset_id = asset_id
        this.asset_type = asset_type
        this.delivery_date = delivery_date
        this.refresh_date = refresh_date
        this.asset_type_cost = asset_type_cost
        this.asset = asset
        this.asset_project = asset_project
    }

}


export { AssetType }