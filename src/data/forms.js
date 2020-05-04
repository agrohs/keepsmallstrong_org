const socialHandles = [
  {
    id: 'twitter_handle',
    title: 'Twitter URL',
    inputType: 'text',
    placeholder: '@twitter-handle',
    pattern: /^(?:http(s)?:\/\/(.*\.)?twitter\.com\/[@A-z0-9_]+\/?|@[A-z0-9_]+)$/,
    patternMessage: 'Please enter a valid Twitter handle or URL',
    required: false,
  },
  {
    id: 'instagram_handle',
    title: 'Instagram URL',
    inputType: 'text',
    placeholder: '@instagram-handle',
    pattern: /^(?:https?:\/\/(www\.)?instagram\.com\/([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))\/?)|@[A-z0-9_\-\.]+)$/,
    patternMessage: 'Please enter a valid Instagram handle or URL',
    required: false,
  },
  {
    id: 'facebook_handle',
    title: 'Facebook URL',
    inputType: 'text',
    placeholder: '@facebook-handle',
    pattern: /^(?:http(s)?:\/\/(www\.)?(facebook|fb)\.com\/[A-z0-9_\-\.]+\/?|@[A-z0-9_\-\.]+)$/,
    patternMessage: 'Please enter a valid Facebook URL',
    required: false,
  },
  {
    id: 'yelp_handle',
    title: 'Yelp URL',
    inputType: 'text',
    placeholder: 'http://yelp.com/biz/<company>',
    pattern: /^http(s)?:\/\/(.*\.)?yelp\.com\/biz\/[@A-z0-9_\-\.]+\/?$/,
    patternMessage: 'Please enter a valid Yelp URL',
    required: false,
  }
]

// TODO: make call to get Forms from Zendesk and then grab regex
const forms = {
  applyForm: {
    id: 'apply',
    title: 'How Can We Help?',
    buttonText: 'Apply Now',
    // fields should be in order of display
    fields: [
      {
        id: 'company_name',
        title: 'Company Name',
        inputType: 'text',
        required: true,
      },
      {
        id: 'company_description',
        title: 'Company Description',
        inputType: 'text',
        placeholder: '',
        required: true,
      },
      {
        id: 'company_story',
        title: 'Company Story',
        inputType: 'textArea',
        placeholder: 'What kind of help do you need? What has you most concerned?',
        required: true,
      },
      {
        id: 'company_phone',
        title: 'Company Phone',
        placeholder: '(XXX) YYY-ZZZZ',
        pattern: /^(1\s?)?(((?:\(|-)?[0-9]{3}(?:\)|-)?)|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/,
        patternMessage: 'Please format as (XXX) YYY-ZZZZ',
        inputType: 'text',
        required: false,
      },
      {
        id: 'company_zipcode',
        title: 'Company Zipcode',
        inputType: 'text',
        required: false,
      },
      {
        id: 'contact_name',
        title: 'Primary Contact Name',
        inputType: 'text',
        fieldType: 'text',
        required: true,
      },
      {
        id: 'email',
        title: 'Primary Contact Email',
        inputType: 'text',
        placeholder: 'your@email.address',
        pattern: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+[.]+(?:.[a-z0-9-]+)+$/i,
        patternMessage: 'Please enter a valid email',
        required: true,
      },
      {
        id: 'industry',
        title: ' Product Types/Industry',
        inputType: 'text',
        placeholder: 'What type(s) of things do you sell/offer?',
        required: true,
      },
      // {
      //   id: 'product_size',
      //   title: 'Average product size (lbs)',
      //   inputType: 'dropdown',
      //   required: true,
      //   options: [
      //     { label: 'Option 1', value: 'type-1' },
      //     { label: 'Option 2', value: 'type-2' },
      //     { label: 'Option 3', value: 'type-3' }
      //   ]
      // },
      // {
      //   id: 'years_in_business',
      //   title: 'Years In Business',
      //   inputType: 'dropdown',
      //   required: true,
      //   options: [
      //     { label: 'Option 1', value: '0-2' },
      //     { label: 'Option 2', value: 'type-2' },
      //     { label: 'Option 3', value: 'type-3' }
      //   ]
      // },
      {
        id: 'employee_count',
        title: '# of Employees',
        inputType: 'dropdown',
        required: true,
        options: [
          { label: '0 - 5', value: 'employees-zero-five' },
          { label: '6 - 20', value: 'employees-six-twenty' },
          { label: '20+', value: 'employees-twenty-plus' }
        ]
      },
      // {
      //   id: 'yearly_revenue',
      //   title: 'Yearly Revenue',
      //   inputType: 'dropdown',
      //   required: true,
      //   options: [
      //     { label: 'Option 1', value: 'type-1' },
      //     { label: 'Option 2', value: 'type-2' },
      //     { label: 'Option 3', value: 'type-3' }
      //   ]
      // },
      {
        id: 'location_count',
        title: '# of Locations',
        inputType: 'dropdown',
        required: true,
        options: [
          { label: '1', value: 'locations-one' },
          { label: '2 - 4', value: 'locations-two-four' },
          { label: '5+', value: 'locations-five-plus' }
        ]
      },
      {
        id: 'website_url',
        title: 'Website URL',
        inputType: 'text',
        placeholder: 'https://my.website.com (if you have an existing site)',
        required: false,
      },
      {
        id: 'current_ecommerce',
        title: 'Do You Already Have E-Commerce In Place?',
        inputType: 'dropdown',
        required: true,
        options: [
          { label: 'Not Yet', value: 'ecommerce-not-yet' },
          { label: 'I Need Help Getting In Place', value: 'ecommerce-need-help' },
          { label: 'It\'s There Already, But Need Help Optimizing', value: 'ecommerce-need-optimization' },
          { label: 'It\'s Already In Place', value: 'ecommerce-already-configured' },
          { label: 'Not Needed At This Time', value: 'ecommerce-dont-need' }
        ]
      },
      {
        id: 'current_delivery',
        title: 'Do You Have Local Delivery In Place?',
        inputType: 'dropdown',
        required: true,
        options: [
          { label: 'Not Yet', value: 'delivery-not-yet' },
          { label: 'I Need Help Getting In Place', value: 'delivery-need-help' },
          { label: 'It\'s Already In Place', value: 'delivery-already-configured' },
          { label: 'Not Needed At This Time', value: 'delivery-dont-need' }
        ]
      },
      {
        id: 'current_shipping',
        title: 'Do You Have Parcel Shipping In Place?',
        inputType: 'dropdown',
        required: true,
        options: [
          { label: 'Not Yet', value: 'shipping-not-yet' },
          { label: 'I Need Help Getting It Set Up', value: 'shipping-need-help' },
          { label: 'It\'s Already In Place', value: 'shipping-already-configured' },
          { label: 'Not Needed At This Time', value: 'shipping-dont-need' }
        ]
      },
      {
        id: 'social_handles',
        inputType: 'group',
        fields: socialHandles
      },
    ]
  },
  referForm: {
    id: 'refer',
    title: 'Tell us about your local',
    buttonText: 'Get The Word Out',
    // fields should be in order of display
    fields: [
      {
        id: 'primary_email',
        title: 'Your Email',
        inputType: 'text',
        placeholder: 'your@email.address',
        pattern: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+[.]+(?:.[a-z0-9-]+)+$/i,
        patternMessage: 'Please enter a valid email',
        required: true,
      },
      {
        id: 'company_name',
        title: 'Company Name',
        inputType: 'text',
        required: true,
      },
      {
        id: 'company_story',
        title: 'Company Story',
        inputType: 'textArea',
        placeholder: 'Tell everyone why you love them! What help do they need?',
        required: true,
      },
      {
        id: 'company_email',
        title: 'Company Contact Email',
        inputType: 'text',
        placeholder: 'company@email.address',
        pattern: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+[.]+(?:.[a-z0-9-]+)+$/i,
        patternMessage: 'Please enter a valid email',
        required: false,
      },
      {
        id: 'company_phone',
        title: 'Company Phone',
        placeholder: '(XXX) YYY-ZZZZ',
        pattern: /^(1\s?)?(((?:\(|-)?[0-9]{3}(?:\)|-)?)|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/,
        patternMessage: 'Please format as (XXX) YYY-ZZZZ',
        inputType: 'text',
        required: false,
      },
      {
        id: 'company_zipcode',
        title: 'Company Zipcode',
        inputType: 'text',
        required: false,
      },
      {
        id: 'website_url',
        title: 'Website URL',
        inputType: 'text',
        placeholder: 'https://company.website.com',
        required: false,
      },
      {
        id: 'social_handles',
        inputType: 'group',
        fields: socialHandles
      },
    ]
  },
  helpForm: {
    id: 'help',
    title: 'Join The Movement',
    buttonText: 'Support Small Business',
    // fields should be in order of display
    fields: [
      {
        id: 'contact_name',
        title: 'Your Name',
        inputType: 'text',
        fieldType: 'text',
        required: true,
      },
      {
        id: 'email',
        title: 'Your Email',
        inputType: 'text',
        placeholder: 'your@email.address',
        pattern: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+[.]+(?:.[a-z0-9-]+)+$/i,
        patternMessage: 'Please enter a valid email',
        required: true,
      },
      {
        id: 'company_name',
        title: 'Company Name',
        inputType: 'text',
        required: false,
      },
      {
        id: 'help_story',
        title: 'How Can You Help?',
        inputType: 'textArea',
        placeholder: 'What kind of support can you help provide?',
        required: true,
      },
    ]
  }
}

export default forms