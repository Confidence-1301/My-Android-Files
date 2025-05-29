import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const arrayStudentData = [
	{
		'id':'ST001',
		'FirstName':'Wagio',
		'LastName':'Joseph',
		'Gender':'Male',
		'DOB':'22-10-2004',
		'Email':'wagiojoseph@gmail.com',
		'Marital Status':'Single'
	},
	{
		'id':'ST001',
		'FirstName':'Wagio',
		'LastName':'Joseph',
		'Gender':'Male',
		'DOB':'22-10-2004',
		'Email':'wagiojoseph@gmail.com',
		'Marital Status':'Single'
	},
	{
		'id':'ST001',
		'FirstName':'Joseph',
		'LastName':'Wagio',
		'Gender':'Male',
		'DOB':'22-10-2004',
		'Email':'wagiojoseph@gmail.com',
		'Marital Status':'Single'
	},
	{
		'id':'ST002',
		'FirstName':'Christian',
		'LastName':'Uchendu',
		'Gender':'Male',
		'DOB':'09-12-0000',
		'Email':'christucoji@gmail.com',
		'Marital Status':'Single'
	},
	{
		'id':'ST003',
		'FirstName':'Samuel',
		'LastName':'Izevbokun',
		'Gender':'Male',
		'DOB':'18-07-2004',
		'Email':'osascode7@gmail.com',
		'Marital Status':'Single'
	},
	{
		'id':'ST004',
		'FirstName':'Abdulaziz',
		'LastName':'Mohammed',
		'Gender':'Male',
		'DOB':'01-01-0000',
		'Email':'abdulsilo32@gmail.com',
		'Marital Status':'Married'
	},
	{
		'id':'ST005',
		'FirstName':'Destiny',
		'LastName':'Ufumaka',
		'Gender':'Male',
		'DOB':'19-04-0000',
		'Email':'ufumakadestiny10@gmail.com',
		'Marital Status':'Single'
	},
	{
		'id':'ST006',
		'FirstName':'Life',
		'LastName':'Agburum',
		'Gender':'Male',
		'DOB':'18-10-0000',
		'Email':'lifeagburum@gmail.com',
		'Marital Status':'Single'
	},
	{
		'id':'ST007',
		'FirstName':'Ogak',
		'LastName':'Finomo',
		'Gender':'Male',
		'DOB':'16-10-0000',
		'Email':'finomoogak@gmail.com',
		'Marital Status':'Divorced'
	},
	{
		'id':'ST008',
		'FirstName':'Victor',
		'LastName': 'Kio',
		'Gender':'Male',
		'DOB':'29-04-2002',
		'Email':'kiovictor8@gmail.com',
		'Marital Status':'Single'
	},
    {
		'id':'ST009',
		'FirstName':'Claude',
		'LastName': 'Ujile',
		'Gender':'Male',
		'DOB':'03-08-2003',
		'Email':'claudeboss27@gmail.com',
		'Marital Status':'Single'
	},
    {
		'id':'ST010',
		'FirstName':'Joel',
		'LastName': 'Oguzo',
		'Gender':'Male',
		'DOB':'10-01-2001',
		'Email':'joeloguzo@gmail.com',
		'Marital Status':'Single'
	},
    {
		'id':'ST011',
		'FirstName':'David',
		'LastName': 'Kelly',
		'Gender':'Male',
		'DOB':'24-09-0000',
		'Email':'davidkellyagbana7@gmail.com',
		'Marital Status':'Single'
	},
    {
		'id':'ST012',
		'FirstName':'Wariebi',
		'LastName': 'Oroupah',
		'Gender':'Male',
		'DOB':'12-10-0000',
		'Email':'orouphw@gmail.com',
		'Marital Status':'Single'
	},
    {
		'id':'ST013',
		'FirstName':'Tamuno-emi',
		'LastName': 'God\'swill',
		'Gender':'Male',
		'DOB':'06-10-1995',
		'Email':'bigwill007@gmail.com',
		'Marital Status':'Single'
	}
]


function StartMap(){
	
   	return arrayStudentData.map((student)=>{
		return(
				<tr>
					
					<td>{student.id}</td>
					<td>{student.FirstName}</td>
					<td>{student.LastName}</td>
					<td>{student.Gender}</td>
					<td>{student.DOB}</td>
					<td>{student.Email}</td>
					<td>{student["Marital Status"]}</td>
				</tr>
			)
		})
}

function MappedTableData(){
	return (
		<>
			<Table hover>
				<thead style=
				{{
					textAlign:'center', 
					background:'blue', 
					color:'white'
				}}>
					<th>ID</th>
					<th>FIRST NAME</th>
					<th>LAST NAME</th>
					<th>GENDER</th>
					<th>DOB</th>
					<th>EMAIL</th>
					<th>MARITAL STATUS</th>					
				</thead>
				<tbody>
					{/* {StartMap()} */}
					<StartMap/>
				</tbody>
			</Table>
		</>
	)	
}

function VariableObjectMap1(){
	return (
		<div className="App">
			<div>
				<h1 style=
				{{
					textAlign:'center',
					backgroundColor:'#f2f2f2'
				}}>
					CLASS LIST OF LEGENDS
				</h1>
			</div>
			<MappedTableData/>
		</div>
	)
}

export default VariableObjectMap1;