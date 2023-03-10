import * as C from './styled';

type Props={
    name: string;
}

export const Botao = ({name}:Props)=>{

    return(
        <C.Bt>{name}</C.Bt>
    );
}