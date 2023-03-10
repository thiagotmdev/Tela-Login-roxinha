import * as C from './styled';

type Props={
    name: string;
    click: ()=> void;
}

export const Botao = ({name, click}:Props)=>{

    return(
        <C.Bt onClick={click}>{name}</C.Bt>
    );
}