import React from 'react';
import { ArrowLeft, Award, AlertCircle, BookOpen, CheckCircle2, Scale } from 'lucide-react';

export default function ScorePage({ onBack }) {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Chat
        </button>

        {/* Score Content */}
        <div className="space-y-6">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Defense Counsel Evaluation Report</h1>
            <p className="text-gray-600">Royal Park Murder Case - Moot Court Performance Assessment</p>
          </div>

          {/* Total Score Card */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Total Score</h2>
                <p className="text-3xl font-bold">75 / 100</p>
                <p className="text-blue-100 mt-2">GOOD</p>
              </div>
              <Award className="h-16 w-16 text-blue-200" />
            </div>
          </div>

          {/* Scoring Categories */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Scale className="h-6 w-6 mr-2 text-blue-600" />
              Scoring System Criteria
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">Category</th>
                    <th className="text-center py-3 px-4 text-gray-600 font-medium">Points</th>
                    <th className="text-center py-3 px-4 text-gray-600 font-medium">Score</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 text-gray-600">Legal Accuracy</td>
                    <td className="text-center py-3 px-4 text-gray-600">30</td>
                    <td className="text-center py-3 px-4 text-gray-600">24</td>
                    <td className="py-3 px-4 text-gray-600">
                      Correct citation of Penal Code sections and relevant legal doctrines (e.g., Exception 4 to Section 294). Minor omissions in case law references.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-600">Argument Strength</td>
                    <td className="text-center py-3 px-4 text-gray-600">30</td>
                    <td className="text-center py-3 px-4 text-gray-600">22</td>
                    <td className="py-3 px-4 text-gray-600">
                      Argued for reduced culpability and lack of intent. However, the argument lacked direct rebuttals to forensic findings and motive challenges.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-600">Courtroom Decorum & Flow</td>
                    <td className="text-center py-3 px-4 text-gray-600">10</td>
                    <td className="text-center py-3 px-4 text-gray-600">9</td>
                    <td className="py-3 px-4 text-gray-600">
                      Clear structure, formal tone, logical sequence maintained.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-600">Use of Legal Terminology</td>
                    <td className="text-center py-3 px-4 text-gray-600">10</td>
                    <td className="text-center py-3 px-4 text-gray-600">8</td>
                    <td className="py-3 px-4 text-gray-600">
                      Appropriate use of terms like "mens rea", "culpable homicide", and "premeditation". Could benefit from deeper doctrinal explanation.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-600">Persuasiveness</td>
                    <td className="text-center py-3 px-4 text-gray-600">10</td>
                    <td className="text-center py-3 px-4 text-gray-600">7</td>
                    <td className="py-3 px-4 text-gray-600">
                      Showed remorse and attempted mitigation well. However, counterarguments weren't fully persuasive in shifting legal interpretation.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-600">Reference to Legal Sources</td>
                    <td className="text-center py-3 px-4 text-gray-600">10</td>
                    <td className="text-center py-3 px-4 text-gray-600">5</td>
                    <td className="py-3 px-4 text-gray-600">
                      No specific case precedent cited other than Penal Code. Missed opportunity to cite landmark SC judgments or prior interpretations.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Errors and Weaknesses */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertCircle className="h-6 w-6 mr-2 text-red-600" />
              Specific Errors / Weaknesses
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">1.</span>
                <span className="text-gray-600">Lack of Citation of Precedent: No supporting case law was referenced (e.g., King v. Alwis or AG v. Dissanayake).</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">2.</span>
                <span className="text-gray-600">Insufficient Forensic Challenge: Did not directly dispute or question the credibility of the prosecution's forensic report.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">3.</span>
                <span className="text-gray-600">Failure to Introduce Mitigating Evidence: Missed opportunity to discuss the accused's mental state or background.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">4.</span>
                <span className="text-gray-600">Repetitive Reasoning: Relied heavily on "heat of passion" without varied logical angles.</span>
              </li>
            </ul>
          </div>

          {/* Suggestions for Improvement */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle2 className="h-6 w-6 mr-2 text-green-600" />
              Suggestions for Improvement
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">1.</span>
                <div>
                  <span className="font-medium text-gray-900">Incorporate Case Law Precedents</span>
                  <p className="text-gray-600 mt-1">Use Sri Lankan case precedents that distinguish between murder and culpable homicide:</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 ml-4">
                    <li>King v. Hettiarachchi (1930) for sudden provocation</li>
                    <li>AG v. Abeysundera for mental state relevance</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">2.</span>
                <div>
                  <span className="font-medium text-gray-900">Introduce Expert Evidence</span>
                  <p className="text-gray-600 mt-1">Refer to psychiatric or psychological assessments to strengthen your claim of irrational conduct or impaired judgment.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">3.</span>
                <div>
                  <span className="font-medium text-gray-900">Enhance Counter to Prosecution Logic</span>
                  <p className="text-gray-600 mt-1">Preemptively address and weaken key prosecution points using alternate explanations.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">4.</span>
                <div>
                  <span className="font-medium text-gray-900">Use Legal Doctrines More Precisely</span>
                  <p className="text-gray-600 mt-1">Mention tests of intention or burden of proof interpretations under Illustration (c) of Section 105 of the Evidence Ordinance.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal Resources */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
              Suggested Legal Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Statutes</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Sri Lanka Penal Code, Sections 294, 296</li>
                  <li>Evidence Ordinance (Sri Lanka), Sections 105, 114</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Case Law</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>AG v. Dissanayake</li>
                  <li>King v. Alwis</li>
                  <li>AG v. Abeysundera</li>
                </ul>
              </div>
              <div className="md:col-span-2">
                <h3 className="font-medium text-gray-900 mb-2">Books</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>"Criminal Law of Sri Lanka" by G.L. Peiris</li>
                  <li>"Textbook on Criminal Law" by Ratanlal & Dhirajlal</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Outcome Determination */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Outcome Determination</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-medium text-gray-900 mb-4">Score Thresholds:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 90–100: Win (Verdict altered or acquittal)</li>
                <li>• 75–89: Partial success (Sentence reduced or retrial ordered)</li>
                <li>• &lt;75: Loss (Conviction and sentence upheld)</li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-900 font-medium">Verdict in Your Case:</p>
                <p className="text-blue-900 mt-1">Score = 75 → Loss, but good effort. Judges upheld the sentence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 