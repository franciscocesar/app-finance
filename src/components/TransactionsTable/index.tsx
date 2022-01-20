import { Container } from "./styles";

import { useTransactions } from "../../hooks/useTransactions";
import { useContext } from "react";



export function TransactionsTable(){
    
    const {transactions} = useTransactions()
    
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Qualquer coisa</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                       {transactions.map( transactions => {
                           return (
                            <tr key={transactions.id}>
                                <td>{transactions.title}</td>
                                <td className={transactions.type}>{transactions.amount}</td>
                                <td>{transactions.category}</td>
                                <td>{new Intl.DateTimeFormat('pt-Br').format(new Date(transactions.createdAt))}</td>
                            </tr>
                          
                           )
                       })}
                    
                   
                    
                </tbody>
            </table>
        </Container>
    )
}