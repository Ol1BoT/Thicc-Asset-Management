import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from "typeorm";
import { AssetType } from "./asset-type";


@Entity()
class AssetProject {

    @PrimaryGeneratedColumn('uuid')
    asset_project_id: string

    @Column()
    asset_project_name: string

    @OneToMany(type => AssetType, assetTypes => assetTypes.asset_project)
    asset_types: AssetType[]

    constructor(asset_project_id: string, asset_project_name: string, asset_types: AssetType[]) {
        this.asset_project_id = asset_project_id
        this.asset_project_name = asset_project_name
        this.asset_types = asset_types
    }
}

export { AssetProject }