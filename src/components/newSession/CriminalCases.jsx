import React from 'react';
import { ChevronRight, BookOpen } from 'lucide-react';

const CRIMINAL_CASES = [
  {
    id: 'royal-park-murder',
    title: 'Attorney General v. Jude Shramantha Jayamaha',
    subtitle: 'Royal Park Murder Case',
    court: 'Court of Appeal',
    caseNo: 'CA 299/2007',
    summary: 'In 2005, the accused murdered his girlfriend, Yvonne Johnson, at Royal Park apartments. He was convicted of murder under Section 296 of the Penal Code and sentenced to death.',
    status: 'Pardoned in 2019 by the President, sparking public outrage.',
    year: 2005
  },
  {
    id: 'bharatha-murder',
    title: 'Attorney General v. Duminda Silva & Others',
    subtitle: 'Bharatha Lakshman Premachandra Murder',
    court: 'High Court of Colombo',
    summary: 'In 2011, a political dispute led to the fatal shooting of MP Bharatha Lakshman Premachandra. Duminda Silva, also a politician, was found guilty of conspiracy to murder.',
    status: 'Death sentence; later pardoned by the President in 2021.',
    year: 2011
  },
  {
    id: 'hanwella-murder',
    title: 'Attorney General v. Marlon Premalal',
    subtitle: 'Hanwella Double Murder',
    court: 'High Court',
    summary: 'Accused of murdering two women in Hanwella in 2004. He was convicted primarily based on forensic and circumstantial evidence.',
    status: 'Conviction upheld by Court of Appeal.',
    year: 2004
  },
  {
    id: 'seya-murder',
    title: 'Attorney General v. Mirusha and Others',
    subtitle: 'Seya Sadewmi Rape & Murder',
    court: 'Gampaha High Court',
    summary: '4-year-old Seya Sadewmi was abducted, raped, and murdered in 2015. DNA evidence was crucial in identifying the true perpetrator, following wrongful arrests.',
    status: 'Conviction and death sentence for main accused, Dinesh Priyashantha.',
    year: 2015
  },
  {
    id: 'white-flag',
    title: 'Attorney General v. Sarath Fonseka',
    subtitle: 'White Flag Case',
    court: 'Colombo High Court Trial-at-Bar',
    summary: 'Retired Army General and presidential candidate Sarath Fonseka was tried for allegedly making false statements implicating government war crimes during the civil war.',
    status: 'Convicted and sentenced to 3 years in prison. Widely criticized as politically motivated.',
    year: 2010
  }
];

export default function CriminalCases({ onCaseSelect }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Notable Criminal Cases</h2>
        <div className="flex items-center text-sm text-gray-500">
          <BookOpen className="h-4 w-4 mr-1" />
          <span>Select a case to analyze</span>
        </div>
      </div>

      <div className="grid gap-4">
        {CRIMINAL_CASES.map((case_) => (
          <div
            key={case_.id}
            onClick={() => onCaseSelect(case_)}
            className="bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">{case_.title}</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {case_.year}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{case_.subtitle}</p>
                <div className="text-sm text-gray-500 mb-2">
                  <span className="font-medium">Court:</span> {case_.court}
                  {case_.caseNo && (
                    <span className="ml-2">
                      <span className="font-medium">Case No:</span> {case_.caseNo}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-2">{case_.summary}</p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Status:</span> {case_.status}
                </p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 