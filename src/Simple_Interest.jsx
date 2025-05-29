import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

// npm install react-bootstrap bootstrap
// npm audit fix --force

// UNDERSTANDING Map() Functionality

// Map something ...
// 7th March, 2023

const arrayObject = 
[
	'Christian', 'Azez', 'Sam', 'Life', 
	'Destiny', 'David', 'Joel', 'Skynet', 
	'Claude', 'Wagio', 'Omiete', 'Victor', 'Cyril'
];

function InsertTable(){
	return arrayObject.map((props)=>
		<tr>
			<td style={{textAlign:'center'}}>
				{props}
			</td>
		</tr>
		);
}

export default function Simple_Interest(){
	return(
		<Table hover>
			<thead>
				<tr>
					<th style={{textAlign:'center'}}>
						CLASS ATTENDANCE
					</th>
				</tr>
			</thead>
			<tbody>
				{/* {InsertTable()} */}
				<InsertTable/>
			</tbody>

		</Table>
	)
}


