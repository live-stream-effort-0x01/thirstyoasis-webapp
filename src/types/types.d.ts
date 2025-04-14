
type AuthProps= {
    isAuth: boolean
};

type CreditProps = {
    credits?: number
};

type SessionProps = AuthProps & CreditProps;


type ModalKey = "SIGNUP" | "LOGIN" | "STREAM_NOW" | "BUY_TOKENS" | "BUY_NOW" | "PROFILE";

type ModalData= {
    id: string,
    displayStyle: string
};

type ButtonTypeKey = "PRIMARY" | "SECONDARY";


// Modal
type ReadModalProps ={
    modalKey: ModalKey | null
}

type SetModalProps = {
    setModalKey: React.Dispatch<React.SetStateAction<ModalKey | null>>
}

type ModalProps = ReadModalProps & SetModalProps;