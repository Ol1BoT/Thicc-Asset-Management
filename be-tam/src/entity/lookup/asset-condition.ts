import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
class AssetCondition {
    @PrimaryGeneratedColumn()
    asset_condition_id: number

    @Column()
    asset_condition: string

    @Column()
    asset_condition_value: number

    constructor(asset_condition_id: number, asset_condition: string, asset_condition_value: number) {

        this.asset_condition_id = asset_condition_id
        this.asset_condition = asset_condition
        this.asset_condition_value = asset_condition_value

    }
}

export { AssetCondition }