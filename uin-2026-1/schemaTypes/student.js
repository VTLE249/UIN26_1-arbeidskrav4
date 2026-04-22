export default {
  name: 'student',
  title: 'Student',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Navn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'E-post',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'study',
      title: 'Bachelorstudie',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Bilde (URL eller opplastet)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageUrl',
      title: 'Eller bilde-URL (f.eks. fra API)',
      type: 'url',
    }
  ],
};
