// @flow 
import * as React from 'react';
import Layout from '../../../components/Layout';
import Title from '../../../components/Title';
import classes from './BankAccountDashboard.module.scss';
import Link, { LinkProps } from "next/link";
import { bankHttp } from "../../../util/http";
import { BankAccountBalance } from '../../../components/BankAccountBalance';
import BankContext from '../../../context/BankContext';
interface ActionLinkProps extends LinkProps {}

const ActionLink: React.FunctionComponent<ActionLinkProps> = (props) => {
    const { children, ...rest } = props;
    const bank = React.useContext(BankContext);
    return (
      <Link {...rest}>
        <a className={`${classes.actionLink} ${classes.bank001}`}>{children}</a>
      </Link>
    );
  };

const Header = () => {
    return (
        <div className={`container ${classes.header}`}>
            <BankAccountBalance balance={0} />
            <div className={classes.buttonActions}>
                <ActionLink
                    href="/bank-accounts/[id]/pix/transactions/register"
                    as={`/bank-accounts/1/pix/transactions/register`}
                > Realizar transferência </ActionLink>
                <ActionLink
                    href={"/bank-accounts/[id]/pix/register"}
                    as={`/bank-accounts/1/pix/register`}
                > Cadastrar chave pix </ActionLink>
            </div>
        </div>
    );
}


const BankAccountDashboard = (props) => {
    return (
        <Layout>
            <Header />
            <Title>Dashboard</Title>
        </Layout>
    );
};

export default BankAccountDashboard;