import { FormTemplate } from '@/types';

export const ontarioWorksForm: FormTemplate = {
  id: 'ontario-works-2024',
  name: 'Ontario Works Application',
  description: 'Application for Ontario Works financial assistance',
  sections: [
    {
      id: 'eligibility',
      title: 'Eligibility',
      description: 'Confirm your eligibility for Ontario Works',
      questions: [
        {
          id: 'elig-1',
          fieldId: 'residencyStatus',
          originalText: 'Are you a Canadian citizen, permanent resident, refugee claimant, or Convention refugee currently residing in Ontario?',
          fieldType: 'select',
          options: ['Yes', 'No'],
          required: true,
          context: 'Ontario Works requires you to be legally allowed to live and work in Ontario. This includes citizens, permanent residents, and people with refugee status.',
          commonConfusions: [
            'International students are NOT eligible',
            'Visitors and tourists are NOT eligible',
            'Work permit holders have limited eligibility'
          ],
          relatedQuestions: []
        },
        {
          id: 'elig-2',
          fieldId: 'ageConfirmation',
          originalText: 'Are you 18 years of age or older, or 16-17 with special circumstances?',
          fieldType: 'select',
          options: ['Yes, 18 or older', 'Yes, 16-17 with special circumstances', 'No'],
          required: true,
          context: 'You must be at least 18 to apply on your own. If you are 16-17, you may qualify if you are pregnant, a parent, escaping abuse, or cannot live with family.',
          commonConfusions: [
            'Minors 16-17 CAN apply in certain situations',
            'You do not need parental consent if you qualify as 16-17'
          ],
          relatedQuestions: []
        },
        {
          id: 'elig-3',
          fieldId: 'financialNeed',
          originalText: 'Are you in financial need and unable to meet your basic living expenses?',
          fieldType: 'select',
          options: ['Yes', 'No'],
          required: true,
          context: 'Ontario Works is for people who cannot pay for food, shelter, and other necessities. You must show you have little or no income and few assets.',
          commonConfusions: [
            'Having some savings does not automatically disqualify you',
            'The asset limit is $10,000 for singles, $15,000 for couples',
            'Your primary residence and one vehicle are usually exempt'
          ],
          relatedQuestions: ['income-1', 'income-2']
        }
      ]
    },
    {
      id: 'household',
      title: 'Household (Benefit Unit)',
      description: 'Tell us about who lives with you',
      questions: [
        {
          id: 'house-1',
          fieldId: 'maritalStatus',
          originalText: 'What is your current marital status?',
          fieldType: 'select',
          options: ['Single', 'Married', 'Common-law', 'Separated', 'Divorced', 'Widowed'],
          required: true,
          context: 'Your marital status affects your benefit amount and who is included in your "benefit unit" (the people who receive benefits together).',
          commonConfusions: [
            'In Ontario, common-law means living together for 3 MONTHS (not 1 year like federal rules)',
            'If you live with a partner, you are likely common-law for Ontario Works',
            'Separated means you no longer live together'
          ],
          relatedQuestions: ['house-2']
        },
        {
          id: 'house-2',
          fieldId: 'dependents',
          originalText: 'How many dependent children (under 18) live with you?',
          fieldType: 'number',
          required: true,
          context: 'Dependent children increase your benefit amount. Include all children who live with you and depend on you financially.',
          commonConfusions: [
            'Include stepchildren if they live with you',
            'Children 18+ are usually not dependents (unless in school)',
            'Shared custody: include children who live with you at least 40% of the time'
          ],
          relatedQuestions: []
        },
        {
          id: 'house-3',
          fieldId: 'otherAdults',
          originalText: 'Do any other adults (18+) live in your household?',
          fieldType: 'select',
          options: ['Yes', 'No'],
          required: true,
          context: 'Other adults in your home may affect your eligibility or benefit amount, depending on your relationship with them.',
          commonConfusions: [
            'Roommates are usually separate from your benefit unit',
            'Adult children may need to apply separately',
            'A partner/spouse is always part of your benefit unit'
          ],
          relatedQuestions: ['house-1']
        }
      ]
    },
    {
      id: 'income',
      title: 'Income',
      description: 'Tell us about your income from all sources',
      questions: [
        {
          id: 'income-1',
          fieldId: 'employmentIncome',
          originalText: 'Do you currently have any employment income (including part-time, casual, or gig work)?',
          fieldType: 'select',
          options: ['Yes', 'No'],
          required: true,
          context: 'You can work and still receive Ontario Works. Some of your earnings are exempt (not counted against your benefits).',
          commonConfusions: [
            'You CAN work part-time and still get benefits',
            'Gig work (Uber, DoorDash, etc.) counts as employment income',
            'First $200/month is fully exempt, then 50% of the rest'
          ],
          relatedQuestions: ['income-2']
        },
        {
          id: 'income-2',
          fieldId: 'monthlyEarnings',
          originalText: 'If employed, what is your gross monthly earnings (before deductions)?',
          fieldType: 'number',
          required: false,
          context: 'Enter your total earnings before taxes and deductions. Include all jobs and gig work.',
          commonConfusions: [
            'Gross means BEFORE taxes are taken out',
            'Include tips and cash payments',
            'If income varies, estimate your average'
          ],
          relatedQuestions: ['income-1']
        },
        {
          id: 'income-3',
          fieldId: 'otherIncome',
          originalText: 'Do you receive any other income? (EI, child support, pension, disability payments, etc.)',
          fieldType: 'select',
          options: ['Yes', 'No'],
          required: true,
          context: 'Other income sources may affect your Ontario Works amount. Some income types are fully exempt.',
          commonConfusions: [
            'Child tax benefit (CCB) is usually NOT counted as income',
            'Child support IS counted as income',
            'EI benefits are counted but you may still qualify for partial OW'
          ],
          relatedQuestions: []
        },
        {
          id: 'income-4',
          fieldId: 'otherIncomeDetails',
          originalText: 'If yes, please describe your other income sources and monthly amounts.',
          fieldType: 'textarea',
          required: false,
          context: 'List each income source and how much you receive per month. Be specific so we can help you understand what counts.',
          commonConfusions: [
            'Include irregular income (estimate monthly average)',
            'Gifts from family may or may not count depending on amount'
          ],
          relatedQuestions: ['income-3']
        }
      ]
    },
    {
      id: 'housing',
      title: 'Housing',
      description: 'Tell us about your shelter costs',
      questions: [
        {
          id: 'housing-1',
          fieldId: 'housingType',
          originalText: 'What is your current housing situation?',
          fieldType: 'select',
          options: [
            'Renting (apartment/house)',
            'Renting a room',
            'Own my home',
            'Living with family/friends (paying rent)',
            'Living with family/friends (not paying rent)',
            'Homeless/shelter',
            'Other'
          ],
          required: true,
          context: 'Your housing situation determines how much shelter allowance you can receive. Different situations have different maximum amounts.',
          commonConfusions: [
            'You can get shelter allowance even if living with family',
            'Homeowners can get help with property taxes and utilities',
            'Homeless individuals have different benefit calculations'
          ],
          relatedQuestions: ['housing-2']
        },
        {
          id: 'housing-2',
          fieldId: 'monthlyRent',
          originalText: 'What is your monthly rent or mortgage payment?',
          fieldType: 'number',
          required: false,
          context: 'Enter the amount you pay each month for housing. Include only the base rent/mortgage, not utilities.',
          commonConfusions: [
            'If you pay rent to family, you need a written agreement',
            'Maximum shelter allowance: $390 single, $642 couple',
            'You get actual rent OR maximum, whichever is less'
          ],
          relatedQuestions: ['housing-1']
        },
        {
          id: 'housing-3',
          fieldId: 'utilities',
          originalText: 'Do you pay utilities separately from your rent? (hydro, heat, water)',
          fieldType: 'select',
          options: ['Yes', 'No', 'Some utilities included'],
          required: true,
          context: 'If you pay utilities separately, you may get additional allowance for them.',
          commonConfusions: [
            'Utilities can increase your shelter allowance',
            'Keep bills as proof of utility costs',
            'Internet and phone are NOT covered as utilities'
          ],
          relatedQuestions: ['housing-2']
        }
      ]
    },
    {
      id: 'review',
      title: 'Review & Declaration',
      description: 'Review your information and agree to the terms',
      questions: [
        {
          id: 'review-1',
          fieldId: 'infoAccurate',
          originalText: 'I declare that all information provided in this application is true and complete to the best of my knowledge.',
          fieldType: 'checkbox',
          required: true,
          context: 'You must confirm your information is accurate. Providing false information can result in benefits being stopped and having to repay money.',
          commonConfusions: [
            'Honest mistakes can be corrected - just report changes',
            'You must report changes in income or household within 10 days',
            'If unsure about something, it is better to ask than guess'
          ],
          relatedQuestions: []
        },
        {
          id: 'review-2',
          fieldId: 'reportChanges',
          originalText: 'I understand that I must report any changes in my income, assets, or household composition within 10 days.',
          fieldType: 'checkbox',
          required: true,
          context: 'Reporting changes is required by law. Changes can increase OR decrease your benefits.',
          commonConfusions: [
            'Report changes even if you think they will reduce benefits',
            'Changes include: new job, someone moving in/out, getting other benefits',
            'You can report changes online, by phone, or in person'
          ],
          relatedQuestions: []
        },
        {
          id: 'review-3',
          fieldId: 'consentToVerify',
          originalText: 'I consent to Ontario Works verifying my information with other government agencies and third parties as needed.',
          fieldType: 'checkbox',
          required: true,
          context: 'Ontario Works may check your information with CRA (taxes), immigration, and other agencies to confirm eligibility.',
          commonConfusions: [
            'This is standard for all applicants',
            'They check to confirm eligibility, not to find reasons to deny',
            'If there are discrepancies, you will have a chance to explain'
          ],
          relatedQuestions: []
        }
      ]
    }
  ]
};
