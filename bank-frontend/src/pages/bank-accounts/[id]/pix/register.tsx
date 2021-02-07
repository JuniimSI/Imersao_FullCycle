// @flow 
import * as React from 'react';
import Card from '../../../../components/Card';
import Layout from '../../../../components/Layout';
import PixKeyCard from '../../../../components/PixKeyCard';
import Title from '../../../../components/Title';
import { PixKeyKind } from '../../../../model';


 const PixRegister = (props) => {
    return (
        <Layout>
            <div className="row">
                <div className="col-sm-6">
                    <Title>Cadastrar chave Pix</Title>
                    <Card>
                        <form></form>
                    </Card>
                </div>
                <div className="col-sm-4 offset-md-2">
                    <Title>Minhas chaves Pix</Title>
                    <PixKeyCard pixKey={{id: 'test', key: 'user1@user.com', kind: PixKeyKind.email}}   />
                </div>
            </div>
        </Layout>
    );
};

export default PixRegister;