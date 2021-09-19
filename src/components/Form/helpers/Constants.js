import * as Yup from 'yup';

export const initialValues = {
  name: '',
  email: '',
  address: '',
  phone: '',
  escrow: 'no',
  ref: 'google',
  type: 'replace',
  claim: 'no',
  description: '',
  comms: 'call' 
}

export const signupSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  address: Yup.string()
     .required('Required'),
  phone: Yup.string()
      .required('Required'),  
});

export const fields = [
  {
    fieldSize: 'HALF',
    id: 'name',
    showErrors: true,
    type: 'input',
    label: 'NAME'
  },
  {
    fieldType: 'email',
    fieldSize: 'HALF',
    id: 'email',
    showErrors: true,
    type: 'input',
    label: 'EMAIL'
  },
  {
    fieldSize: 'HALF',
    id: 'address',
    showErrors: true,
    label: 'ADDRESS',
    type: 'input'
  },
  {
    fieldSize: 'HALF',
    id: 'phone',
    showErrors: true,
    type: 'input',
    label: 'PHONE NUMBER',
  },
  {
    fieldSize: 'HALF',
    id: 'type',
    type: 'select',
    label: 'PROJECT TYPE',
    options: [
      {
        value: 'replace',
        label: 'Replacement'
      },
      {
        value: 'repair',
        label: 'Repair'
      },
    ]
  },
  {
    fieldSize: 'HALF',
    id: 'escrow',
    type: 'select',
    label: 'IN ESCROW?',
    options: [
      {
        value: 'yes',
        label: 'Yes'
      },
      {
        value: 'no',
        label: 'No'
      },
    ]
  },
  {
    fieldSize: 'FULL',
    id: 'claim',
    type: 'select',
    label: 'IS THIS AN INSURANCE CLAIM?',
    options: [
      {
        value: 'no',
        label: 'No'
      },
      {
        value: 'yes',
        label: 'Yes'
      },
    ]
  },
  {
    fieldSize: 'HALF',
    id: 'ref',
    type: 'select',
    label: 'REFERRAL',
    options: [
      {
        value: 'google',
        label: 'Google'
      },
      {
        value: 'yelp',
        label: 'Yelp'
      },
      {
        value: 'friend',
        label: 'Acquaintance'
      },
    ]
  },
  {
    fieldSize: 'HALF',
    id: 'comms',
    type: 'select',
    label: 'METHOD OF COMMUNICATION',
    options: [
      {
        value: 'call',
        label: 'Call'
      },      
      {
        value: 'email',
        label: 'Email'
      },
      {
        value: 'text',
        label: 'Text'
      },
    ]
  },
  {
    fieldSize: 'FULL',
    id: 'description',
    component: 'textarea',
    label: 'DESCRIPTION',
    rows: '10'
  },
]