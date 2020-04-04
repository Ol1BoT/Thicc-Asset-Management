import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Asset } from "./asset";


@Entity()
class AssetComment {
    @PrimaryGeneratedColumn('uuid')
    asset_comment_id: string

    @Column({ type: 'text' })
    comment: string

    @CreateDateColumn()
    created_date: string

    @UpdateDateColumn()
    updated_column: string

    @ManyToOne(type => Asset, asset => asset.comment)
    asset: Asset

    constructor(asset_comment_id: string, comment: string, created_date: string, updated_column: string, asset: Asset) {
        this.asset_comment_id = asset_comment_id
        this.comment = comment
        this.created_date = created_date
        this.updated_column = updated_column
        this.asset = asset
    }
}

export { AssetComment }