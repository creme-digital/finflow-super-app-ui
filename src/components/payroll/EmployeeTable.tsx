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
    <div className="rounded-[8px] border border-[#E3E3EA] overflow-hidden">
      <Table className="min-w-full text-sm">
        <TableHeader>
          <TableRow style={{ background: '#F8F8FA' }}>
            <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Name</TableHead>
            <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Position</TableHead>
            <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Department</TableHead>
            <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Status</TableHead>
            <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Salary</TableHead>
            <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Pay Frequency</TableHead>
            <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3 w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell className="font-medium">{employee.name}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>
                <span
                  style={{
                    borderRadius: 6,
                    fontWeight: 500,
                    fontSize: 13,
                    padding: '2px 12px',
                    display: 'inline-block',
                    background: employee.status === 'Active' ? '#C9EBCC' : '#EBC9C9',
                    color: employee.status === 'Active' ? '#021B0D' : '#1D0202',
                  }}
                >
                  {employee.status}
                </span>
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
