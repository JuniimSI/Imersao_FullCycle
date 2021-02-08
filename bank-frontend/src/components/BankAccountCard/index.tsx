// @flow 
import * as React from 'react';
import BankContext from '../../context/BankContext';
import { BankAccount } from '../../model';
import classes from "./BankAccountCard.module.scss";

interface BankAccountCardProps {
    bankAccount: BankAccount;
}
export const BankAccountCard: React.FunctionComponent<BankAccountCardProps> = (props) => {

    const { bankAccount } = props;
    const bank = React.useContext(BankContext);

    return (
        <article className={`${classes.root} ${classes[bank.cssCode]}`}>
            <div>
                <h2 className={classes.ownerName}>{bankAccount.owner_name}</h2>
                <p className={`${classes.accountNumber}  ${classes[bank.cssCode]}`}>
                    {bankAccount.account_number}
                </p>
            </div>
            <span
                className={`fas fa-chevron-right ${classes.iconRight} 
            ${classes[bank.cssCode]}`}></span>
        </article>
    );
};

export default BankAccountCard;