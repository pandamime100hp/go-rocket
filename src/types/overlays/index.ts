import { Launch } from "../launches"


export interface OverlayType {
    item: any
    ItemComponent: React.FC<any>
    onClose: () => void
}

export interface LaunchOverlayType {
    item: Launch
    onClose: () => void
}