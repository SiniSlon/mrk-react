import styled from "styled-components";

const ReportDetails =()=>{
    return(
        <Form>
            <FirstStr>
                <DivOne>
                <div>
                    <label>Reports</label><label>1</label>
                </div>
                <div> 
                    <label>Operator</label><label>2</label>
                </div>
                <div>
                    <label>Login</label><label>3</label>
                </div>
                <div>
                    <label>Create date</label><label>4</label>
                </div>
                <div>
                    <label>Close date</label><label>5</label>
                </div>
                <div>
                    <label>Watched sessions</label><label>6</label>
                </div>
                <div>
                    <label>Watched abonents</label><label>7</label>
                </div>
                <div>
                    <label>Status</label><label>8</label>
                </div>
                <div>
                    <label>Build nets</label><label>9</label>
                </div>
                <div>
                    <label>Session in reports</label><label>10</label>
                </div>
                <div>
                    <label></label>
                </div>
                </DivOne>
            <table>
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Key</th>
                        <th>Values</th>
                        <th>Counts</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <CommentBlock>
            <label>Comment</label>
            <p>test</p></CommentBlock>
            </FirstStr>
            <div>
                <p>table sessions</p>
            </div>
            <div>
                <p>choosen session</p>
            </div>
        </Form>
    )
}
export default ReportDetails

const Form =styled.div`
    background-color:white;
    margin:5px;
    border-radius:10px;`
    
const FirstStr = styled.div `
    display:flex;
    flex-direction:row;
    ;
    table{
        width:950px;
    }
    tr{
        border-bottom: 1px solid gray;
    }`


const DivOne =styled.div `
    width:200px;
    ;`

const CommentBlock =styled.div`
    width:150px;
    `;