import Image from "next/image";
import {CarProps} from "@/types";
interface CarDetailsProps {
    isOpen: boolean;
    closeModel: () => void;
    car: CarProps;
}

const CarDetails = ({ isOpen, closeModel, car}: CarDetailsProps) => {
    return (
        <div></div>
    )
}
export default CarDetails