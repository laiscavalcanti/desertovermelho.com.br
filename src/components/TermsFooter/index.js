import React from 'react';
import { Link }from "gatsby"
import * as S  from'./styled';

const LinksTerms = () => (
    <S.WrapperLinksTerms>
        <Link to= "/"> <S.CopyRight>@2020 desertovermelho.com </S.CopyRight></Link> • 
        <S.LinkTerm to= "/terms" > termos de uso</S.LinkTerm> • 
        <S.DevelopBy to="https://github.com/laiscavalcanti" >  
            desenvolvido por @laiscavalcanti
        </S.DevelopBy> • 
        <S.Contact>
            fale aqui: desertovermelho@gmail.com
        </S.Contact>
    </S.WrapperLinksTerms>
    
    )
export default LinksTerms;
