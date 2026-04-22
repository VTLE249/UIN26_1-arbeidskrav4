export const assignment = {
  name: 'assignment',
  title: 'Arbeidskrav',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
};
