/* eslint-disable max-len */
import { RequirementsJson } from './types';

const json: RequirementsJson = {
  university: {
    value: 'UNI',
    name: 'University',
    requirements: [
      {
        name: 'Academic Credits',
        description: 'To graduate, a student must earn a minimum of 120 academic credits. Physical education credits and “10XX” courses do not count toward the 120 required credits.',
        source: 'http://courses.cornell.edu/content.php?catoid=31&navoid=7901',
        fulfilledBy: 'credits',
        minCount: 120,
        applies: 'all',
        progressBar: true
      },
      {
        name: 'Physical Education',
        description: 'All incoming freshmen are required to take two credits (two courses) of Physical Education, one credit each semester of the first year on campus.',
        source: 'http://courses.cornell.edu/content.php?catoid=36&navoid=9249',
        fulfilledBy: 'courses',
        minCount: 2,
        applies: 'all'
      },
      {
        name: 'Swimming Test',
        description: 'The Faculty Advisory Committee on Athletics and Physical Education has established a basic swimming and water safety competency requirement for all entering first-year undergraduate students.',
        source: 'http://courses.cornell.edu/content.php?catoid=36&navoid=9249',
        fulfilledBy: 'self-check',
        minCount: 0,
        applies: 'all'
      }
    ]
  },
  college: {
    AG: {
      name: 'Agriculture and Life Sciences',
      requirements: [
        {
          name: 'CALS Credits',
          description: '55 CALS credits are required for graduation. CALS credits include all courses from departments within CALS and courses offered in Applied Economics and Management, Biological Sciences, Biology & Society, Earth and Atmospheric Sciences, Information Science, Nutritional Science, and The Department of Statistics and Data Science.',
          source: 'https://cals.cornell.edu/undergraduate-students/student-services/degree-requirements/graduation-requirements',
          checkerName: 'calsCredits',
          fulfilledBy: 'credits',
          minCount: 55,
          progressBar: true
        },
        {
          name: 'Introductory Life Sciences/Biology',
          description: 'Students must complete at least six academic credits from the list of courses that fulfill distribution requirements.',
          source: 'https://cals.cornell.edu/undergraduate-students/student-services/degree-requirements/graduation-requirements/distribution-requirements',
          checkerName: 'calsIntroductoryLifeSciencesOrBiology',
          fulfilledBy: 'credits',
          minCount: 6
        },
        {
          name: 'Physical and Life Sciences',
          description: '18 credits in at least three disciplines of which six credits must be introductory life sciences/biology and three credits in chemistry or physics and a quantitative literacy course.',
          source: 'https://cals.cornell.edu/undergraduate-students/student-services/degree-requirements/graduation-requirements/distribution-requirements',
          checkerName: null,
          fulfilledBy: 'self-check'
        },
        {
          name: 'Chemistry/Physics',
          description: 'Complete a minimum of three academic credits of chemistry or physics. Includes all Cornell courses with the CHEM or PHYS prefix at Cornell (excluding courses that are supplemental, independent study, research, TA, internship, and First-Year Writing Seminar).',
          source: 'https://cals.cornell.edu/undergraduate-students/student-services/degree-requirements/graduation-requirements/distribution-requirements',
          checkerName: 'calsChemistryOrPhysics',
          fulfilledBy: 'credits',
          minCount: 3
        },
        {
          name: 'Quantitative Literacy',
          description: 'Faculty legislation requires minimum competency in quantitative literacy. This requirement can be satisfied by earning a score of 4 or 5 on the AP Calculus exam or a score of 5 on the AP Statistics exam, or transfer an approved calculus or statistics course with a minimum letter grade of “C” or better; or take an approved calculus or statistics course at Cornell.',
          source: 'https://cals.cornell.edu/undergraduate-students/student-services/degree-requirements/graduation-requirements/distribution-requirements',
          checkerName: 'calsQuantitativeLiteracy',
          fulfilledBy: 'courses',
          minCount: 1
        },
        {
          name: 'Social Sciences and Humanities',
          description: 'Students must complete four courses of 3 or more credits each from the following seven categories of courses in the humanities and social sciences. At least one course category MUST be completed in three different categories. No more than two courses in the same department will be counted toward the distribution requirement. To view a searchable list of courses, please search for courses that fulfill distribution requirements.',
          source: 'https://cals.cornell.edu/undergraduate-students/student-services/degree-requirements/graduation-requirements/distribution-requirements',
          checkerName: 'calsSocialSciencesAndHumanities',
          fulfilledBy: 'courses',
          minCount: 4,
          uniqueIncludes: 3
        },
        {
          name: 'Human Diversity (D)',
          description: 'At least one course category MUST be completed in three different categories. Human Diversity (D) is a required category and MUST be completed.',
          source: 'https://cals.cornell.edu/undergraduate-students/student-services/degree-requirements/graduation-requirements/distribution-requirements',
          checkerName: 'calsHumanDiversity',
          fulfilledBy: 'courses',
          minCount: 1
        },
        {
          name: 'Written and Oral Expression',
          description: '9 credits total, of which at least six must be in written expression. Oral expression is not required by the college, but may be required for some majors. If not required, all nine credits may be in written expression. Writing in the Majors courses do not count towards the writing requirement.',
          source: 'https://cals.cornell.edu/undergraduate-students/student-services/degree-requirements/graduation-requirements/distribution-requirements',
          checkerName: 'calsWrittenAndOralExpression',
          fulfilledBy: 'credits',
          minCount: 9
        },
        {
          name: 'Written Expression',
          description: 'At least six credits must be in written expression.',
          source: 'https://cals.cornell.edu/undergraduate-students/student-services/degree-requirements/graduation-requirements/distribution-requirements',
          checkerName: 'calsWrittenExpression',
          fulfilledBy: 'credits',
          minCount: 6
        }
      ]
    },
    AR: {
      name: 'Architecture, Art and Planning',
      requirements: [
        {
          name: 'Introductory Studio Practice',
          description: '6 classes of studio practice: Introductory 2000-level studios. To be completed by the end of the third semester.',
          source: 'https://aap.cornell.edu/academics/art/undergraduate/curriculum',
          checkerName: 'aapIntroductoryStudioPractice',
          fulfilledBy: 'courses',
          minCount: 6
        },
        {
          name: 'Elective Studio Practice',
          description: '4 classes of studio practice: Elective 3000-level studios. B.F.A. students are required to successfully complete four 3000-level studios from any of the six different studio practice areas as well as Rome and/or New York City. Students may enroll in a 3000-level studio once they have successfully completed the 2000-level studio in that same studio practice area. Sample classes include:',
          source: 'https://aap.cornell.edu/academics/art/undergraduate/curriculum',
          checkerName: 'aapElectiveStudioPractice',
          fulfilledBy: 'courses',
          minCount: 4
        },
        {
          name: 'Pre-thesis Studio Practice',
          description: '1 class of studio practice: Pre-thesis',
          source: 'https://aap.cornell.edu/academics/art/undergraduate/curriculum',
          checkerName: 'aapPreThesisStudioPractice',
          fulfilledBy: 'courses',
          minCount: 1
        },
        {
          name: 'Thesis Studio Practice',
          description: '2 classes of studio practice: Thesis year. All required 3000-level studios and ART 3006 must be completed before ART 4003 Thesis I, and all elective 3000-level studios must be completed before ART 4004 Thesis II.',
          source: 'https://aap.cornell.edu/academics/art/undergraduate/curriculum',
          checkerName: 'aapThesisStudioPractice',
          fulfilledBy: 'courses',
          minCount: 2
        },
        {
          name: 'Shop Instruction',
          description: '1 class of shop instruction',
          source: 'https://aap.cornell.edu/academics/art/undergraduate/curriculum',
          checkerName: 'aapShopInstruction',
          fulfilledBy: 'courses',
          minCount: 1
        },
        {
          name: 'Theory and Criticism',
          description: '3 classes of theory and criticism',
          source: 'https://aap.cornell.edu/academics/art/undergraduate/curriculum',
          checkerName: 'aapTheoryAndCriticism',
          fulfilledBy: 'courses',
          minCount: 2
        },
        {
          name: 'Theory and Criticism Elective',
          description: 'One additional theory and criticism elective.',
          source: 'https://aap.cornell.edu/academics/art/undergraduate/curriculum',
          checkerName: null,
          fulfilledBy: 'self-check'
        },
        {
          name: 'Art History',
          description: '3 classes of art history. One modern/contemporary art history class, one global art history class, and one additional art history elective.',
          source: 'https://aap.cornell.edu/academics/art/undergraduate/curriculum',
          checkerName: null,
          fulfilledBy: 'self-check'
        },
        {
          name: 'First-Year Writing Seminars',
          description: '2 writing classes. Any two writing classes from the following: First-Year Writing Seminars (FWS), ENGL 2880, ENGL 2890',
          source: 'https://aap.cornell.edu/academics/art/undergraduate/curriculum',
          checkerName: 'aapFWS',
          fulfilledBy: 'credits',
          minCount: 6
        },
        {
          name: 'Elective Plan',
          description: 'Any academic class at Cornell chosen in consultation with faculty advisor.',
          source: 'https://aap.cornell.edu/academics/art/undergraduate/curriculum',
          checkerName: null,
          fulfilledBy: 'self-check',
          minCount: 37
        }
      ]
    },
    AS: {
      name: 'Arts and Sciences',
      requirements: [
        {
          name: 'CAS Credits',
          description: '100 credits in Arts & Sciences is a minimum number, as is the 120 credit total. Students can take more than 20 credits outside of the College as long as they take 100 credits within; they can also take all their credits in Arts & Sciences and accumulate more than 120. Note: AP, IB, and A-Level credits count toward the 120 total credits but not toward the 100 A&S credits.',
          source: 'https://as.cornell.edu/degree-requirements',
          checkerName: 'casCredits',
          fulfilledBy: 'credits',
          minCount: 100,
          progressBar: true
        },
        {
          name: 'First-Year Writing Seminars (FWS)',
          description: 'A 5 on either the AP English Composition or Literature exam, or a 7 on the IB HL English Literature or Language exam will count towards one of these seminars. First-year students should plan to take an FWS during their first semester at Cornell.',
          source: 'https://as.cornell.edu/degree-requirements',
          checkerName: 'casFWS',
          fulfilledBy: 'credits',
          minCount: 6
        },
        {
          name: 'Foreign Language Requirement',
          description: 'A student must either pass an intermediate Cornell language course at the 2000-level or above or complete at least 11 credits in a single foreign language at Cornell. AP and IB credits cannot complete this requirement, but usually indicate that you place into a higher level course. Note: Native speakers of a foreign language may be exempted from this requirement.',
          source: 'https://as.cornell.edu/degree-requirements',
          checkerName: null,
          fulfilledBy: 'self-check'
        },
        {
          name: 'Intermediate Language Course',
          description: 'Option 1 - Successfully complete one intermediate course of 3 or more credits at Cornell at the 2000 level or above.',
          source: 'https://as.cornell.edu/Foreign-Language',
          checkerName: 'casIntermediateLanguageCourse',
          fulfilledBy: 'courses',
          minCount: 1
        },
        {
          name: 'Language Course Credits',
          description: 'Option 2 - Successfully complete at least 11 credits of study (2 or 3 semesters) in a single foreign language taken in the appropriate sequence at Cornell.',
          source: 'https://as.cornell.edu/Foreign-Language',
          checkerName: 'casLanguageCourseCredits',
          fulfilledBy: 'credits',
          minCount: 11
        },
        {
          name: '(PBS-AS) or (MQR-AS)',
          description: 'Four courses in Physical & Biological Sciences (PBS-AS/PBSS-AS),  and Mathematics & Quantitative Reasoning (MQR-AS).',
          source: 'https://as.cornell.edu/degree-requirements',
          checkerName: 'casPBSOrMQR',
          fulfilledBy: 'courses',
          minCount: 4
        },
        {
          name: 'Physical & Biological Sceiences (PBS-AS)',
          description: 'Students must take 2 courses in Physical & Biological Sciences (PBS).',
          source: 'https://as.cornell.edu/degree-requirements',
          checkerName: 'casPhysicalAndBiologicalSciences',
          fulfilledBy: 'courses',
          minCount: 2
        },
        {
          name: 'Mathematics & Quantitative Reasoning (MQR-AS)',
          description: 'Students must take 1 in Mathematics & Quantitative Reasoning (MQR).',
          source: 'https://as.cornell.edu/degree-requirements',
          checkerName: 'casMathematicsAndQuantitativeAndReasoning',
          fulfilledBy: 'courses',
          minCount: 1
        },
        {
          name: 'Liberal Arts',
          description: 'Five Arts & Sciences courses of 3 or more credits from at least 4 of the following social sciences, humanities, and arts categories:',
          source: 'https://as.cornell.edu/degree-requirements',
          checkerName: 'casLiberalArts',
          fulfilledBy: 'courses',
          minCount: 5,
          uniqueIncludes: 4
        },
        {
          name: 'Geographic Breadth Requirement (GB)',
          description: 'One course that focuses on an area or a people other than those of the United States, Canada, or Europe. Courses fulfilling this requirement are marked with a GB in the Class Roster.',
          source: 'https://as.cornell.edu/degree-requirements',
          checkerName: 'casGeographicBreadthRequirement',
          fulfilledBy: 'courses',
          minCount: 1
        },
        {
          name: 'Historic catalogBreadth Requirement (HB)',
          description: 'One course that focuses on an historic period before the 20th century. Courses fulfilling this requirement are marked with an HB in the Class Roster.',
          source: 'https://as.cornell.edu/degree-requirements',
          checkerName: 'casHistoricBreadthRequirement',
          fulfilledBy: 'courses',
          minCount: 1
        }
      ]
    },
    EN: {
      name: 'Engineering',
      requirements: [
        {
          name: 'Mathematics',
          description: 'MATH 1910, 1920, 2930 or 2940, and a mathematics course chosen by the Major.',
          source: 'https://www.engineering.cornell.edu/students/undergraduate-students/curriculum/undergraduate-requirements',
          checkerName: 'engineeringMathematics',
          fulfilledBy: 'credits',
          minCount: 14
        },
        {
          name: 'Physics',
          description: 'PHYS 1112 and 2213, and, depending on the Major, either PHYS 2214 or a designated mathematics or science course.',
          source: 'https://www.engineering.cornell.edu/students/undergraduate-students/curriculum/undergraduate-requirements',
          checkerName: 'engineeringPhysics',
          fulfilledBy: 'credits',
          minCount: 8
        },
        {
          name: 'Chemistry',
          description: 'CHEM 2090.  Majors in Chemical Engineering or those planning on a health-related career should take CHEM 2090 and then 2080.  Students in Environmental Engineering should take CHEM 2090 and CHEM 1570/3570.  Earth and Atmospheric Sciences majors should take CHEM 2090 and then 2080/1570.',
          source: 'https://www.engineering.cornell.edu/students/undergraduate-students/curriculum/undergraduate-requirements',
          checkerName: 'engineeringChemistry',
          fulfilledBy: 'credits',
          minCount: 4
        },
        {
          name: 'First-Year Writing Seminars',
          description: 'All students are required to take two first-year writing seminars.',
          source: 'https://www.engineering.cornell.edu/students/undergraduate-students/curriculum/undergraduate-requirements',
          checkerName: 'engineeringFWS',
          fulfilledBy: 'credits',
          minCount: 6
        },
        {
          name: 'Computing',
          description: '(CS 1110, 1112, 1114, or 1115)',
          source: 'https://www.engineering.cornell.edu/students/undergraduate-students/curriculum/undergraduate-requirements',
          checkerName: 'engineeringComputing',
          fulfilledBy: 'credits',
          minCount: 4
        },
        {
          name: 'Introduction to Engineering',
          description: 'One introduction to engineering (ENGRI) course.',
          source: 'https://www.engineering.cornell.edu/students/undergraduate-students/curriculum/undergraduate-requirements',
          checkerName: 'engineeringENGRI',
          fulfilledBy: 'credits',
          minCount: 4
        },
        {
          name: 'Engineering Distribution',
          description: 'Two different category distribution courses (ENGRD), one of which may be required by the Major.',
          source: 'https://www.engineering.cornell.edu/students/undergraduate-students/curriculum/undergraduate-requirements',
          checkerName: 'engineeringDistribution',
          fulfilledBy: 'credits',
          minCount: 6
        },
        {
          name: 'Liberal Studies Distribution',
          description: 'Liberal Studies Distribution (six courses)',
          source: 'https://www.engineering.cornell.edu/students/undergraduate-students/curriculum/undergraduate-requirements',
          checkerName: 'engineeringLiberalArts',
          fulfilledBy: 'credits',
          minCount: 18,
          uniqueIncludes: 3
        },
        {
          name: 'Advisor-Approved Electives',
          description: '\'Advisor-Approved\' means that you have justified your selection to your advisor and that your advisor has approved the selection. It makes good sense to use these electives for lower-level introductory courses that may be required prerequisites for the 3000+ technical elective courses and the courses used to satisfy the Specialization. Phys Ed, courses numbered 10xx, and ROTC courses below the 3000-level, do not qualify for academic credit and can not be used toward the degree requirements in CS. Up to 6 credits of advisor approved electives may be allowed for ROTC courses at the 3000-level or above.',
          source: 'https://www.cs.cornell.edu/undergrad/rulesandproceduresengineering/choosingyourelectives#adv_elective',
          checkerName: null,
          fulfilledBy: 'self-check',
          minCount: 6
        },
        {
          name: 'Major Program',
          description: 'Major-required courses, major-approved electives, and courses outside the major.',
          source: 'https://www.engineering.cornell.edu/students/undergraduate-students/curriculum/undergraduate-requirements',
          checkerName: null,
          fulfilledBy: 'self-check',
          minCount: 3
        },
        {
          name: 'Technical Communication',
          description: 'In addition to the first-year writing seminars, a technical writing course must be taken as an engineering distribution, liberal studies, Advisor-approved electives, or Major course.',
          source: 'https://www.engineering.cornell.edu/students/undergraduate-students/curriculum/undergraduate-requirements',
          checkerName: null,
          fulfilledBy: 'self-check',
          minCount: 3
        }
      ]
    },
    HE: {
      name: 'Human Ecology',
      requirements: [
        {
          name: 'Human Ecology Credits',
          description: 'Students must complete a minimum of 43 Human Ecology credits from College Distribution, Major Requirements and electives.',
          source: 'https://www.human.cornell.edu/academics/policies/requirements',
          checkerName: 'humanEcologyCredits',
          fulfilledBy: 'credits',
          minCount: 43,
          progressBar: true
        },
        {
          name: 'Technical Communication',
          description: 'In addition to the first-year writing seminars, a technical writing course must be taken as an engineering distribution, liberal studies, Advisor-approved electives, or Major course.',
          source: 'https://www.engineering.cornell.edu/students/undergraduate-students/curriculum/undergraduate-requirements',
          checkerName: null,
          fulfilledBy: 'self-check'
        },
        {
          name: '9 Credits In HE Outside Major',
          description: 'Students must earn 9 credits in Human Ecology departments outside their major department with rules:',
          source: 'https://www.human.cornell.edu/academics/policies/requirements',
          checkerName: null,
          fulfilledBy: 'self-check',
          minCount: 9
        }
      ]
    },
    IL: {
      name: 'Industrial Labor Relations',
      requirements: [
        {
          name: 'Core Requirements',
          description: 'Students are required to fulfill the following core requirements for a letter grade:',
          source: 'https://www.ilr.cornell.edu/student-experience/curriculum-requirements/undergraduate-requirements',
          checkerName: 'ilrCoreRequirements',
          fulfilledBy: 'courses',
          minCount: 9
        },
        {
          name: 'First-Year Writing Seminars',
          description: 'Students are required to fulfill the following writing requirements for a letter grade:',
          source: 'https://www.ilr.cornell.edu/student-experience/curriculum-requirements/undergraduate-requirements',
          checkerName: 'ilrFWS',
          fulfilledBy: 'credits',
          minCount: 3
        },
        {
          name: 'ILR Advance Writing',
          description: 'Courses must be taken for a letter grade in order to count toward the ILR Requirements',
          source: 'https://www.ilr.cornell.edu/student-experience/curriculum-requirements/undergraduate-requirements/ilr-advanced-writing-courses',
          checkerName: 'ilrAdvanceWriting',
          fulfilledBy: 'courses',
          minCount: 1
        },
        {
          name: 'Distribution Requirements',
          description: 'Students are required to complete one course from each of the following lists to fulfill the distribution requirements. All courses must be taken for a letter grade.',
          source: 'https://www.ilr.cornell.edu/student-experience/curriculum-requirements/undergraduate-requirements',
          checkerName: null,
          fulfilledBy: 'self-check',
          minCount: 3
        }
      ]
    },
    BU: {
      name: 'SC Johnson College of Business',
      requirements: [
        {
          name: 'Major Requirements',
          description: 'Graduation requirements depend on major. For undergraduates, it is either Dyson or SHA requirements.',
          source: 'https://business.cornell.edu/programs/undergraduate/',
          checkerName: null,
          fulfilledBy: 'self-check'
        }
      ]
    }
  },
  major: {
    AEM: {
      name: 'Applied Economics and Management',
      schools: [
        'AG',
        'BU'
      ],
      requirements: [
        {
          name: 'AEM Concentration Requirement',
          description: 'AEM majors must choose at least one of the following eleven concentrations by the beginning of their junior year, and may choose no more than two. No more than one course may fulfill the elective credits of two concentrations. Courses used to fulfill a core Applied Economics or Quantitative Methods requirement cannot also count towards a concentration requirement except in EERE. One class from the core requirements may be taken for a S/U grade. NO S/U grades will be accepted in a declared concentration, unless a class is offered S/U only. All course petitions or substitutions are managed through the Dyson Office of Student Services in consultation with a committee of faculty from each concentration',
          source: 'https://dyson.cornell.edu/programs/undergraduate/degree-requirements/core/',
          checkerName: null,
          fulfilledBy: 'self-check'
        },
        {
          name: 'Management Requirements',
          description: 'AEM 3200 and AEM 3230 are optional for the following three concentrations: applied economics; environmental, energy, and resource economics; and international trade and development.',
          source: 'https://dyson.cornell.edu/programs/undergraduate/degree-requirements/core/',
          checkerName: 'aemManagementRequirements',
          fulfilledBy: 'courses',
          minCount: 7
        },
        {
          name: 'Economics Requirements',
          description: 'ECON 1110, ECON 1120, AND AEM 2600. For students concentrating in environmental, energy, and resource economics, ECON 3030 is required instead of AEM 2600.',
          source: 'https://dyson.cornell.edu/programs/undergraduate/degree-requirements/core/',
          checkerName: 'aemEconomicsRequirements',
          fulfilledBy: 'courses',
          minCount: 3
        },
        {
          name: 'Quantitative Methods Requirements',
          description: 'AEM 2100, MATH 1110 OR MATH 1120, AND AEM 2010',
          source: 'https://dyson.cornell.edu/programs/undergraduate/degree-requirements/core/',
          checkerName: 'aemQuantitativeMethodsRequirements',
          fulfilledBy: 'courses',
          minCount: 3
        },
        {
          name: 'Quantitative Methods Elective Requirements',
          description: 'At least 3 elective credits from the following.',
          source: 'https://dyson.cornell.edu/programs/undergraduate/degree-requirements/core/',
          checkerName: 'aemQuantitativeMethodsElectivesRequirements',
          fulfilledBy: 'credits',
          minCount: 3
        },
        {
          name: 'Applied Economics Requirements',
          description: 'At least 6 credits; must come from two of the four categories below. Courses used to fulfill a quantitative methods requirement or a concentration requirement or elective cannot also be counted toward a core applied economics requirement, unless that concentration is environmental, energy, and resource economics.',
          source: 'https://dyson.cornell.edu/programs/undergraduate/degree-requirements/core/',
          checkerName: null,
          fulfilledBy: 'self-check'
        },
        {
          name: 'Grand Challenges Reqiurement Part 1: Written expression course',
          description: 'Sophomore year: 3 credits. Focus: Critical thinking. These course options are centered around contemporary global issues and will help you learn communication, business analysis, and critical thinking skills as you develop cultural awareness. Available courses may vary per semester. You’ll choose one of the following:',
          source: 'https://dyson.cornell.edu/programs/undergraduate/degree-requirements/core/',
          checkerName: 'aemGradChallengeRequirementPart1',
          fulfilledBy: 'courses',
          minCount: 1
        },
        {
          name: 'Grand Challenges Reqiurement Part 2: Pre-Project Weekend Immersion',
          description: 'Junior year: 1.5 credits. Focus: Working as part of a team',
          source: 'https://dyson.cornell.edu/programs/undergraduate/degree-requirements/core/',
          checkerName: 'aemGradChallengeRequirementPart2',
          fulfilledBy: 'courses',
          minCount: 1
        },
        {
          name: 'Grand Challenges Reqiurement Part 3: Project Course',
          description: 'Senior year, 3 credits. Focus: Local and global community involvement',
          source: 'https://dyson.cornell.edu/programs/undergraduate/degree-requirements/core/',
          checkerName: 'aemGradChallengeRequirementPart3',
          fulfilledBy: 'courses',
          minCount: 1
        }
      ]
    },
    BE: {
      name: 'Biological Engineering',
      schools: ['EN'],
      requirements: [
        {
          name: 'Engineering Distriubtions',
          description: 'ENGRD 2020 and ENGRD 2600 or ENGRD 2510',
          source: 'http://cornellengineeringhandbook.freeflowdp.com/cornellengineeringhandbook/5215877281438417/MobilePagedReplica.action?pm=2&folio=12#pg14',
          checkerName: 'bioEngineeringEngineeringDistributions',
          fulfilledBy: 'courses',
          minCount: 2
        },
        {
          name: 'Intro Bio',
          description: 'Choose 2 of the following 4: BIOMG 1350, BIOG 1440, BIOG 1445, and BIOEE/BIOSM 1610',
          source: 'http://cornellengineeringhandbook.freeflowdp.com/cornellengineeringhandbook/5215877281438417/MobilePagedReplica.action?pm=2&folio=12#pg14',
          checkerName: 'bioEngineeringIntroBio',
          fulfilledBy: 'courses',
          minCount: 2
        },
        {
          name: 'Required Major Courses',
          description: 'Major requirements for BE: BIOG/BIOSM 1500, BEE 3500, BEE 3310, BEE 3400, BEE 3600, and BEE 4500',
          source: 'http://cornellengineeringhandbook.freeflowdp.com/cornellengineeringhandbook/5215877281438417/MobilePagedReplica.action?pm=2&folio=12#pg14',
          checkerName: 'bioEngineeringRequiredMajorCourses',
          fulfilledBy: 'courses',
          minCount: 6
        },
        {
          name: 'Biochemistry',
          description: 'BIOMG 3300, BIOMG 3330, BIOMG 3350, or BIOMG 3310 and BIOMG 3320',
          source: 'http://cornellengineeringhandbook.freeflowdp.com/cornellengineeringhandbook/5215877281438417/MobilePagedReplica.action?pm=2&folio=12#pg14',
          checkerName: 'bioEngineeringBioChemistry',
          fulfilledBy: 'courses',
          minCount: 2
        },
        {
          name: 'Upper-level Biology',
          description: 'Any biology course at the 2000-level or above which has a biology prerequisite and is taken for a letter grade. This requirement may also be satisfied by an upper-level course in a science department (excluding engineering, liberal studies, social sciences, and mathematics) which has a biology (not social science) content of 95% or greater and a biology prerequisite. Students must receive approval for these alternative courses by consulting their BE faculty advisor or the main BE Advising Office, 207 Riley-Robb Hall. One credit seminars and BIOG 2990/4990 credits may not be used to meet this requirement.',
          source: 'http://cornellengineeringhandbook.freeflowdp.com/cornellengineeringhandbook/5215877281438417/MobilePagedReplica.action?pm=2&folio=12#pg14',
          checkerName: null,
          fulfilledBy: 'self-check'
        },
        {
          name: 'Engineering Statistics',
          description: 'BEE 2220 or ENGRD 2210 or CHEME 3130 or MSE 3030 and engineering statistics preferably before semester 6. CEE 3040 is the preferred version of statistics.',
          source: 'http://cornellengineeringhandbook.freeflowdp.com/cornellengineeringhandbook/5215877281438417/MobilePagedReplica.action?pm=2&folio=12#pg14',
          checkerName: 'bioEngineeringEngineeringStatistics',
          fulfilledBy: 'courses',
          minCount: 2
        },
        {
          name: 'BE Focus Area Elective',
          description: 'BE Focus Area Electives must include a BEE capstone design course. See beadvised.bee.cornell.edu for a current list of approved courses. In place of one focus area course, students may use up to 4 credits of research, project team, teaching, or independent study taken in an engineering department towards the engineering credits in category 8.',
          source: 'https://beadvised.bee.cornell.edu/full-list-of-focus-area-courses/',
          checkerName: 'bioEngineeringFocusAreaElective',
          fulfilledBy: 'courses',
          minCount: 4
        }
      ]
    },
    CS: {
      name: 'Computer Science',
      schools: [
        'EN',
        'AS'
      ],
      requirements: [
        {
          name: 'Introductory Programming',
          description: 'CS 111x (CS 1110, 1112, 1114, or 1115) and CS 2110 (or CS 2112) or equivalent.',
          source: 'https://www.cs.cornell.edu/undergrad/csmajor',
          checkerName: 'csIntroProgramming',
          fulfilledBy: 'courses',
          minCount: 2
        },
        {
          name: 'Computer Science Core',
          description: 'CS 2800 (or CS 2802), CS 3110, CS 3410 or CS 3420, CS 4410, and CS 4820',
          source: 'https://www.cs.cornell.edu/undergrad/csmajor',
          checkerName: 'csCore',
          fulfilledBy: 'courses',
          minCount: 5
        },
        {
          name: 'CS Practicum or Project',
          description: 'CS practicums (CS 4xx1) or CS 3152, CS 4152, CS 4154, CS 4740, CS 4752, CS 5150, CS 5152, CS 5412, CS 5414, CS 5431, CS 5625, or CS 5643.',
          source: 'https://www.cs.cornell.edu/undergrad/csmajor',
          checkerName: 'csPracticumOrProject',
          fulfilledBy: 'courses',
          minCount: 1
        },
        {
          name: 'Technical Electives',
          description: 'The Technical Electives must be made up of three 3000+ level courses.  These courses must be taken for a letter grade, and each must earn three or more credit hours.',
          source: 'https://www.cs.cornell.edu/undergrad/csmajor/technicalelectives',
          checkerName: null,
          fulfilledBy: 'self-check'
        },
        {
          name: 'External Specialization',
          description: 'The External Specialization involves nine or more credit hours at the 3000+ level. Absolutely no CS courses are allowed. The three courses must be related to each other. Frequently, the three courses are from the same department, e.g., OR&IE 3300 (Optimization I), OR&IE 3310 (Optimization II), and OR&IE 4330 (Discrete Models). However, a great strength of Cornell is the multitude of interdisciplinary threads that cut across departmental boundaries. Thus, Psychology 4150 (Concepts, Categories, and Word Meanings), Philosophy 3320 (Philosophy of Language), and Linguistics 5530 (Representation of Structure in Vision and Language) define an acceptable Specialization.',
          source: 'https://www.cs.cornell.edu/undergrad/rulesandproceduresengineering/choosingyourelectives',
          checkerName: null,
          fulfilledBy: 'self-check'
        },
        {
          name: 'Major-approved Elective(s)',
          description: 'The major elective is any course or courses approved by your CS major advisor. This elective requirement can be met by multiple courses totalling 3 credits, or one course of 3+ credit hours. Phys Ed, courses numbered 10xx, and ROTC courses below the 3000-level, do not qualify for academic credit and can not be used toward the degree requirements in CS.',
          source: 'https://www.cs.cornell.edu/undergrad/rulesandproceduresengineering/choosingyourelectives',
          checkerName: null,
          fulfilledBy: 'self-check'
        }
      ]
    },
    ECON: {
      name: 'Economics',
      schools: ['AS'],
      requirements: [
        {
          name: 'Admission to the Major',
          description: 'Before applying for admission to the Economics Major, students must complete ECON 1110, ECON 1120, and MATH 1110 (or equivalents).',
          source: 'https://economics.cornell.edu/major',
          checkerName: 'economicsAdmissionToTheMajor',
          fulfilledBy: 'courses',
          minCount: 3
        },
        {
          name: 'Core Economics',
          description: 'All students must take four core economics courses: ECON 3030, ECON 3040, ECON 3110 or ECON 3130, and ECON 3120 or ECON 3140.',
          source: 'https://economics.cornell.edu/major',
          checkerName: 'economicsCoreEconomics',
          fulfilledBy: 'courses',
          minCount: 4
        },
        {
          name: '4000-level Courses',
          description: 'All students must take at least three courses at the 4000-level or higher.',
          source: 'https://economics.cornell.edu/major',
          checkerName: 'economics4000LevelCourses',
          fulfilledBy: 'courses',
          minCount: 3
        },
        {
          name: 'Basic Requirements',
          description: 'Twelve courses listed by the Department of Economics, or approved by the student’s major advisor',
          source: 'https://economics.cornell.edu/major',
          checkerName: 'econimicsBasicRequirements',
          fulfilledBy: 'courses',
          minCount: 12
        }
      ]
    },
    ENGL: {
      name: 'English',
      schools: [
        'AS'
      ],
      requirements: [
        {
          name: 'Total Credits',
          description: 'To graduate with a major in English, a student must complete with a grade of C or better 40 credit hours approved for the English major. All 2000-level ENGL courses (with the exception of 2800-2810 and 2880-2890) count for the major, as do all 3000-and 4000-level courses.',
          source: 'https://english.cornell.edu/majoring-and-minoring-english-cornell#requirements-for-the-major',
          checkerName: 'englishTotalCredits',
          fulfilledBy: 'credits',
          minCount: 40
        },
        {
          name: 'Pre-1800',
          description: '12 credits (normally 3 courses) must be from courses in which 50% or more of the material consists of literature originally written in English before 1800 (such courses are indicated in the English course listings)',
          source: 'https://english.cornell.edu/majoring-and-minoring-english-cornell#requirements-for-the-major',
          checkerName: 'englishPre1800',
          fulfilledBy: 'credits',
          minCount: 12
        },
        {
          name: '4000 or Above',
          description: '8 credits (2 courses) must be at the 4000 level or above',
          source: 'https://www.engineering.cornell.edu/students/undergraduate-students/curriculum/undergraduate-requirements',
          checkerName: 'english4000OrAbove',
          fulfilledBy: 'credits',
          minCount: 8
        },
        {
          name: 'Concentration',
          description: '12 credits (3 courses) must form an intellectually coherent concentration (see below).',
          source: 'https://www.engineering.cornell.edu/students/undergraduate-students/curriculum/undergraduate-requirements',
          checkerName: null,
          fulfilledBy: 'self-check',
          minCount: 12
        }
      ]
    },
    GOVT: {
      name: 'Government',
      schools: ['AS'],
      requirements: [
        {
          name: 'Introductory Government Courses',
          description: 'Pass two of the introductory government courses in the subfields of American Government (AM), Comparative Politics (CP), Political Theory (PT), and International Relations (IR)',
          source: 'https://government.cornell.edu/sites/govt/files/Majorchecklist%202017_2018%20rv%20untrckd.pdf',
          checkerName: 'governmentIntroductoryGovernmentCourses',
          fulfilledBy: 'courses',
          minCount: 2
        },
        {
          name: 'Government Coursework',
          description: 'Accumulate an additional 28 credits of government course work at the 2000-level or above.',
          source: 'https://government.cornell.edu/sites/govt/files/Majorchecklist%202017_2018%20rv%20untrckd.pdf',
          checkerName: 'governmentCourseWork',
          fulfilledBy: 'credits',
          minCount: 28
        },
        {
          name: 'Tenth Government Course',
          description: 'The tenth GOVT course: must be worth a minimum of three credits, can be taken at any level. First-Year Writing Seminars cannot be used.',
          source: 'https://government.cornell.edu/sites/govt/files/Majorchecklist%202017_2018%20rv%20untrckd.pdf',
          checkerName: 'governmentTenthGovernmentCourse',
          fulfilledBy: 'credits',
          minCount: 3
        },
        {
          name: 'Government Seminar',
          description: 'At least one of the GOVT courses listed in items II or III above must be a 4000-level seminar (i.e. a course with 15 or fewer students, taught by a GOVT professor, and typically requiring a research paper).',
          source: 'https://government.cornell.edu/sites/govt/files/Majorchecklist%202017_2018%20rv%20untrckd.pdf',
          checkerName: null,
          fulfilledBy: 'self-check'
        }
      ]
    },
    HADM: {
      name: 'Hotel Administration',
      schools: [
        'BU'
      ],
      requirements: [
        {
          name: 'Accounting; Real Estate Development',
          description: 'HADM 1210, HADM 2210, HADM 2220, HADM 3210',
          source: 'https://sha.cornell.edu/current-students/handbook/2015-2016-handbook/curriculum-requirements/',
          checkerName: 'hotelAdminAccounting',
          fulfilledBy: 'courses',
          minCount: 4
        },
        {
          name: 'Employment Relations; HR; Law',
          description: 'HADM 1150, HADM 2810, HADM 3870',
          source: 'https://sha.cornell.edu/current-students/handbook/2015-2016-handbook/curriculum-requirements/',
          checkerName: 'hotelAdminEmploymentRelationsHRLaw',
          fulfilledBy: 'courses',
          minCount: 3
        },
        {
          name: 'Food and Beverage Management',
          description: 'HADM 2360, HADM 3350',
          source: 'https://sha.cornell.edu/current-students/handbook/2015-2016-handbook/curriculum-requirements/',
          checkerName: 'hotelAdminFoodAndBeverageManagement',
          fulfilledBy: 'courses',
          minCount: 2
        },
        {
          name: 'Information Systems',
          description: 'HADM 1740',
          source: 'https://sha.cornell.edu/current-students/handbook/2015-2016-handbook/curriculum-requirements/',
          checkerName: 'hotelAdminInformationSystems',
          fulfilledBy: 'courses',
          minCount: 1
        },
        {
          name: 'Management Communication',
          description: 'HADM 1650, HADM 3650',
          source: 'https://sha.cornell.edu/current-students/handbook/2015-2016-handbook/curriculum-requirements/',
          checkerName: 'hotelAdminManagementCommunication',
          fulfilledBy: 'courses',
          minCount: 2
        },
        {
          name: 'Operations',
          description: 'HADM 1350, HADM 1360, HADM 2010, HADM 3010',
          source: 'https://sha.cornell.edu/current-students/handbook/2015-2016-handbook/curriculum-requirements/',
          checkerName: 'hotelAdminOperations',
          fulfilledBy: 'courses',
          minCount: 4
        },
        {
          name: 'Properties Development and Management',
          description: 'HADM 2550, HADM 3550',
          source: 'https://sha.cornell.edu/current-students/handbook/2015-2016-handbook/curriculum-requirements/',
          checkerName: 'hotelAdminPropertiesDevelopmentAndManagement',
          fulfilledBy: 'courses',
          minCount: 2
        },
        {
          name: 'Services Marketing',
          description: 'HADM 1410, HADM 2430',
          source: 'https://sha.cornell.edu/current-students/handbook/2015-2016-handbook/curriculum-requirements/',
          checkerName: 'hotelAdminServicesMarketing',
          fulfilledBy: 'courses',
          minCount: 2
        },
        {
          name: 'Strategy',
          description: 'HADM 4410',
          source: 'https://sha.cornell.edu/current-students/handbook/2015-2016-handbook/curriculum-requirements/',
          checkerName: 'hotelAdminStrategy',
          fulfilledBy: 'courses',
          minCount: 1
        },
        {
          name: 'SHA Electives',
          description: 'A minimum of 14 credits, 3000-level or higher, in SHA.',
          source: 'https://sha.cornell.edu/current-students/handbook/2015-2016-handbook/curriculum-requirements/',
          checkerName: 'hotelAdminSHAElectives',
          fulfilledBy: 'credits',
          minCount: 14
        },
        {
          name: 'Non-HADM Electives',
          description: 'A minimum of 18 credits, to be taken outside SHA. 3 of these 18 credits must be FWS.',
          source: 'https://sha.cornell.edu/current-students/handbook/2015-2016-handbook/curriculum-requirements/',
          checkerName: null,
          fulfilledBy: 'self-check',
          minCount: 15
        },
        {
          name: 'First-Year Writing Seminars',
          description: 'A minimum of 18 credits, to be taken outside SHA. 3 of these 18 credits must be FWS.',
          source: 'https://sha.cornell.edu/current-students/handbook/2015-2016-handbook/curriculum-requirements/',
          checkerName: 'hotelAdminFWS',
          fulfilledBy: 'credits',
          minCount: 3
        },
        {
          name: 'Free Electives',
          description: 'A minimum of 24 credits, to be taken either in or outside SHA.',
          source: 'https://sha.cornell.edu/current-students/handbook/2015-2016-handbook/curriculum-requirements/',
          checkerName: null,
          fulfilledBy: 'self-check',
          minCount: 24
        }
      ]
    },
    HIST: {
      name: 'History',
      schools: [
        'AS'
      ],
      requirements: [
        {
          name: 'History Major Classes',
          description: '9 history courses (with a grade of “C” or better). 4 of the nine courses must be taken from one each of the following five categories: Asian, North America, European, Global South (Africa/Caribbean/Latin American and Middle East), and Transregional (Transregional, Comparative, and Methodological). Note: a single course may fulfill more than one requirement as long as the total number of history courses is nine. For example, a course in medieval European history that is also a seminar would count for that requirement, as well as both a course in history before 1800 and as a course in European History.',
          source: 'https://history.cornell.edu/undergraduate',
          checkerName: null,
          fulfilledBy: 'self-check',
          minCount: 9
        },
        {
          name: 'Pre 1800 Classes',
          description: '3 of the nine courses must be in history before 1800 (Courses that fulfill the Arts & Sciences historical breadth requirement do not necessarily fulfill the History pre-1800 requirement.)',
          source: 'https://history.cornell.edu/undergraduate',
          checkerName: 'historyPre1800Classes',
          fulfilledBy: 'courses',
          minCount: 3
        },
        {
          name: 'Seminars',
          description: '2 of the nine courses must be seminars, and one of these seminars must be a 4000-level seminar.  Service-learning 4000-level courses, HIST 4001, HIST 4002, may not be used to fulfill the 4000-level seminar requirement.',
          source: 'https://history.cornell.edu/undergraduate',
          checkerName: null,
          fulfilledBy: 'self-check',
          minCount: 2
        }
      ]
    },
    INFO: {
      name: 'Information Science',
      schools: [
        'AS',
        'AG'
      ],
      requirements: [
        {
          name: 'Core Courses',
          description: 'Students are required to complete five core courses: INFO 1200, INFO 1300, INFO 2040, INFO 2450, and INFO 2950.',
          source: 'https://infosci.cornell.edu/undergraduate/info-sci-majors/ba-information-science-college-arts-sciences/degree-requirements/core',
          checkerName: 'infoCoreCourses',
          fulfilledBy: 'courses',
          minCount: 5
        },
        {
          name: 'Programming and Math Requirements',
          description: 'All Information Science majors are required to take CS 1110, Introduction to Computing Using Python, Calculus I, and a Statistics course. The list of approved Calculus I and Statistics is provided below. All classes used to complete major requirements must be taken for a letter grade. Advanced Placement credits may not be used to fulfill the Statistics requirement for students matriculating as of or after Fall 2015, however, they may be used to fulfill the Calculus requirement. Students that have taken CS 1112 should take CS 1133, Transition to Python, to be prepared for INFO 2950, Introduction to Data Science.',
          source: 'https://infosci.cornell.edu/undergraduate/info-sci-majors/bs-information-science-cals/degree-requirements/programming-and-math',
          checkerName: 'infoProgrammingAndMathRequirements',
          fulfilledBy: 'courses',
          minCount: 3
        },
        {
          name: 'Concentration',
          description: 'Students are required to complete AT LEAST one concentration from the seven concentrations available',
          source: 'https://infosci.cornell.edu/undergraduate/info-sci-majors/ba-information-science-college-arts-sciences/degree-requirements-0',
          checkerName: null,
          fulfilledBy: 'self-check',
          minCount: 1
        },
        {
          name: 'Electives',
          description: 'All students are required to complete three electives that are chosen from the following options: INFO 2300, CS 2110, CS 3110, CS 3410 or any INFO 3000+ or higher course including INFO 4900 (except INFO 4998). These courses must be taken for a letter grade, each must earn three or more credit hours, and all must be completed with a grade of C- or higher.Students may only fulfill one of their electives with INFO 4900 (3 credits or more).',
          source: 'https://infosci.cornell.edu/undergraduate/info-sci-majors/ba-information-science-college-arts-sciences/degree-requirements-2',
          checkerName: 'infoElectives',
          fulfilledBy: 'courses',
          minCount: 3
        }
      ]
    },
    ISST: {
      name: 'Information Science, Systems, and Technology',
      schools: [
        'EN'
      ],
      requirements: [
        {
          name: 'Probability, Statistics, and Optimization',
          description: 'ORIE 3300: Optimization I, ORIE 3500: Engineering Probability and Statistics II',
          source: 'https://infosci.cornell.edu/undergraduate/info-sci-majors/bs-information-science-systems-and-technology/degree-requirements/core',
          checkerName: 'isstProbabilityStatisticsAndOptimization',
          fulfilledBy: 'courses',
          minCount: 2
        },
        {
          name: 'Information Systems',
          description: 'INFO 2300: Intermediate Design and Programming for the Web, ORIE 3800: Information Systems and Analysis or ORIE 3120: Practical Tools for Operations Research, Machine Learning and Data Science, one of -- INFO 3300: Data-Driven Web Applications, INFO 4300: Language and Information',
          source: 'https://infosci.cornell.edu/undergraduate/info-sci-majors/bs-information-science-systems-and-technology/degree-requirements/core',
          checkerName: 'isstInformationSystems',
          fulfilledBy: 'courses',
          minCount: 3
        },
        {
          name: 'Economic, Organization, and Social Context',
          description: 'INFO 2040: Networks, one of -- INFO 2450: Communication and Technology, ENGRC 3350: Communications for Engineering Managers',
          source: 'https://infosci.cornell.edu/undergraduate/info-sci-majors/bs-information-science-systems-and-technology/degree-requirements/core',
          checkerName: 'isstEconomicOrganizationAndSocialContext',
          fulfilledBy: 'courses',
          minCount: 2
        },
        {
          name: 'Engineering Mathematics',
          description: 'For majors in ISST, the sequence of required mathematics courses is MATH 1910, MATH 1920, MATH 2940, and finally, one of MATH 2930 or MATH 3040 or CS 2800.',
          source: 'https://infosci.cornell.edu/undergraduate/info-sci-majors/bs-information-science-systems-and-technology/degree-requirements/math',
          checkerName: 'isstEngineeringMathematics',
          fulfilledBy: 'courses',
          minCount: 4
        },
        {
          name: 'Engineering Distributions',
          description: 'The major requires ENGRD 2700 as an Engineering Distribution course. ENGRD 2110 is also required by the major and it is recommended that this course be taken as an Engineering Distribution course.',
          source: 'https://infosci.cornell.edu/undergraduate/info-sci-majors/bs-information-science-systems-and-technology/degree-requirements/math',
          checkerName: 'isstEngineeringDistributions',
          fulfilledBy: 'courses',
          minCount: 2
        }
      ]
    },
    ME: {
      name: 'Mechanical Engineering',
      schools: ['EN'],
      requirements: [
        {
          name: 'Engineering Distriubtions',
          description: 'ENGRD 2020',
          source: 'http://cornellengineeringhandbook.freeflowdp.com/cornellengineeringhandbook/5215877281438417/MobilePagedReplica.action?pm=2&folio=12#pg14',
          checkerName: 'mechanicalEngineeringEngineeringDistribution',
          fulfilledBy: 'courses',
          minCount: 1
        },
        {
          name: 'Required Major Courses',
          description: 'MAE 2210, MAE 2030, MAE 2250, MAE 3230, MAE 3240, MAE 3260, MAE 3270, (MAE 3780, ENGRD 2100, or PHYS 3360), MAE 4272, and MAE 4300',
          source: 'http://cornellengineeringhandbook.freeflowdp.com/cornellengineeringhandbook/5215877281438417/MobilePagedReplica.action?pm=2&folio=12#pg14',
          checkerName: 'mechanicalEngineeringRequiredMajorCourses',
          fulfilledBy: 'courses',
          minCount: 10
        },
        {
          name: 'M.E. Major Electives',
          description: 'A list of approved Major-approved Electives is available online at www.mae.cornell.edu',
          source: 'http://cornellengineeringhandbook.freeflowdp.com/cornellengineeringhandbook/5215877281438417/MobilePagedReplica.action?pm=2&folio=12#pg14',
          checkerName: null,
          fulfilledBy: 'self-check'
        },
        {
          name: 'MAE 4xx1: Supervised Senior Design Experience',
          description: 'Can be satisfied by independent research, project team, or by designated senior design formal course, MAE 4xx1.',
          source: 'http://cornellengineeringhandbook.freeflowdp.com/cornellengineeringhandbook/5215877281438417/MobilePagedReplica.action?pm=2&folio=12#pg14',
          checkerName: null,
          fulfilledBy: 'self-check'
        },
        {
          name: 'Mathematics Elective:',
          description: 'Must be an upper-level mathematics course, which includes statistics, taken after Math 2940. A list of approved math electives is available online at www.mae.cornell.edu',
          source: 'http://cornellengineeringhandbook.freeflowdp.com/cornellengineeringhandbook/5215877281438417/MobilePagedReplica.action?pm=2&folio=12#pg14',
          checkerName: 'mechanicalEngineeringMathematicsElective',
          fulfilledBy: 'credits',
          minCount: 3
        },
        {
          name: 'Technical Elective',
          description: 'A Technical Elective includes technical courses at an appropriate level, chosen from engineering (2000+), mathematics (beyond 2940), science (beyond Physics 2214), chemistry (2080, or beyond 2090), or biological sciences. Most 2000+ technical level courses in engineering will be accepted. (Note: Engineering economic, business, management, financial, or organization courses will not be accepted, with the exception of MAE 4610.). The following 1000-level courses in biology are accepted: BIOG 1440; BIOG 1445; BIOMG 1350; BIOEE 1610; and BIOSM 1610. In addition, credit for advanced placement biology and technical courses at the 2000+ level in biological sciences are accepted.',
          source: 'http://cornellengineeringhandbook.freeflowdp.com/cornellengineeringhandbook/5215877281438417/MobilePagedReplica.action?pm=2&folio=12#pg14',
          checkerName: null,
          fulfilledBy: 'self-check'
        },
        {
          name: 'Major-approved Elective',
          description: 'A list of approved Major-approved Electives is available online at www.mae.cornell.edu',
          source: 'http://cornellengineeringhandbook.freeflowdp.com/cornellengineeringhandbook/5215877281438417/MobilePagedReplica.action?pm=2&folio=12#pg14',
          checkerName: null,
          fulfilledBy: 'self-check'
        }
      ]
    },
    ORIE: {
      name: 'Operations Research and Engineering',
      schools: [
        'EN'
      ],
      requirements: [
        {
          name: 'Major Required Classes',
          description: 'The following courses may be substituted for ORIE 3150, if not used to meet other require- ments: MATH 3110 (Introduction to Analysis), MATH 4130 (Honors Real Analysis), MATH 4310 (Linear Algebra), MATH 4330 (Honors Linear Algebra), any 600 level ORIE course.',
          source: 'https://www.orie.cornell.edu/orie/programs/undergraduate-programs/degree-requirements',
          checkerName: 'orieMajorRequiredClasses',
          fulfilledBy: 'courses',
          minCount: 7
        },
        {
          name: 'ORIE Electives',
          description: 'At least 9 credits of ORIE electives at the 4000 level or above',
          source: 'https://www.orie.cornell.edu/orie/programs/undergraduate-programs/degree-requirements',
          checkerName: 'orieElectives',
          fulfilledBy: 'credits',
          minCount: 9
        },
        {
          name: 'Engineering Distribution Courses',
          description: 'ENGRI 1xxx, ENGRD 2700, and ENGRD xxxx. ENGRD 2110 is recommended',
          source: 'https://www.orie.cornell.edu/orie/programs/undergraduate-programs/degree-requirements',
          checkerName: 'orieEngineeringDistributionCourses',
          fulfilledBy: 'courses',
          minCount: 3
        },
        {
          name: 'Major Approved Electives (Non–ORIE)',
          description: 'Minimum of 9-12 credits of Major-Approved Electives 3 of which must be outside of ORIE. Technical courses in Engineering at the 2000 level or above.',
          source: 'https://www.orie.cornell.edu/orie/programs/undergraduate-programs/degree-requirements',
          checkerName: null,
          fulfilledBy: 'self-check'
        },
        {
          name: 'Major Approved Elective',
          description: 'Minimum of 9-12 credits of Major-Approved Electives 3 of which must be outside of ORIE. Technical courses in Engineering at the 2000 level or above.',
          source: 'https://www.orie.cornell.edu/orie/programs/undergraduate-programs/degree-requirements',
          checkerName: null,
          fulfilledBy: 'self-check'
        }
      ]
    }
  }
};

export default json;
