// @flow 
import * as React from 'react';
import BankAccountCard from '../components/BankAccountCard';
import Layout from '../components/Layout';
import Title from '../components/Title';
type Props = {

};

const BankAccountList = (props: Props) => {
    return (
        <Layout>
            <Title>Contas bancárias</Title>
            <div className="row">
                <a href="" className="col-12 col-sm-6 col-md4">
                    <BankAccountCard bankAccount={{
                        id: 'teste', owner_name: 'teste1', balance: 0, account_number: '1111'
                    }}/>
                </a>
                <a href="" className="col-12 col-sm-6 col-md4">
                    <BankAccountCard bankAccount={{
                        id: 'teste2', owner_name: 'teste2', balance: 0, account_number: '2222'
                    }}/>
                </a>
            </div>
        </Layout>
    );
};

export default BankAccountList;