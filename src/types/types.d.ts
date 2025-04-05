
type AuthProps= {
    isAuth: boolean
};

type CreditProps = {
    credits?: number
};

type SessionProps = AuthProps & CreditProps;


type ModalKey = "SIGNUP" | "LOGIN" | "STREAM_NOW" | "BUY_TOKENS" | "BUY_NOW";

type ModalData= {
    id: string,
    displayStyle: string
};


