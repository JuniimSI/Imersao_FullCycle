// @flow 
import * as React from 'react';
type Props = {
    
};
export const SubPagina = (props: Props) => {
    const[count, setCount] = React.useState(0);
    return (
        <div>
            Subpagina
            <button onClick={(e) => setCount(count+1)}>Botao</button>
            {count}
        </div>
    );
};

export default SubPagina;