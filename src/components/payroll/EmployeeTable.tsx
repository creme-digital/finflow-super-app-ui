
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { BadgeCheck, Pencil, BadgeDollarSign } from 'lucide-react';

// Sample employee data
const employees = [
  {
    id: 1,
    name: 'Alex Johnson',
    position: 'Software Engineer',
    department: 'Engineering',
    status: 'Active',
    salary: '$85,000',
    frequency: 'Bi-Weekly',
  },
  {
    id: 2,
    name: 'Samantha Lee',
    position: 'Marketing Manager',
    department: 'Marketing',
    status: 'Active',
    salary: '$78,500',
    frequency: 'Bi-Weekly',
  },
  {
    id: 3,
    name: 'Michael Chen',
    position: 'UX Designer',
    department: 'Design',
    status: 'Active',
    salary: '$72,000',
    frequency: 'Bi-Weekly',
  },
  {
    id: 4,
    name: 'Taylor Wilson',
    position: 'Financial Analyst',
    department: 'Finance',
    status: 'Active',
    salary: '$68,000',
    frequency: 'Monthly',
  },
  {
    id: 5,
    name: 'Jordan Smith',
    position: 'Customer Support',
    department: 'Operations',
    status: 'On Leave',
    salary: '$55,000',
    frequency: 'Bi-Weekly',
  },
];

export const EmployeeTable = () => {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Pay Frequency</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell className="font-medium">{employee.name}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <span 
                    className={`w-2 h-2 rounded-full mr-2 ${
                      employee.status === 'Active' ? 'bg-green-500' : 'bg-amber-500'
                    }`} 
                  />
                  {employee.status}
                </div>
              </TableCell>
              <TableCell>{employee.salary}</TableCell>
              <TableCell>{employee.frequency}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="icon" variant="ghost">
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <BadgeDollarSign className="h-4 w-4" />
                    <span className="sr-only">Pay</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
