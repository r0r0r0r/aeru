import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Flavor Drop',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Flavor Name',
      type: 'string',
      description: 'The massive name on the card (e.g. CITRUS VEIL)',
      validation: (Rule) => Rule.required().uppercase(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'The brutalist subtitle (e.g. INTENSE / CHAOS)',
    }),
    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'image',
      title: 'Can Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Theme Color (Hex)',
      type: 'string',
      description: 'The background glow color (e.g. #FF4D00)',
    }),
    defineField({
      name: 'nutrition',
      title: 'Nutrition Stats',
      type: 'object',
      fields: [
        {name: 'calories', type: 'number', title: 'Calories'},
        {name: 'sugar', type: 'number', title: 'Sugar (g)'},
        {name: 'caffeine', type: 'number', title: 'Caffeine (mg)'},
      ]
    }),
    defineField({
        name: 'flavorProfile',
        title: 'Flavor Profile (Sliders)',
        type: 'object',
        fields: [
            {name: 'acidity', type: 'number', title: 'Acidity (0-100)'},
            {name: 'sweetness', type: 'number', title: 'Sweetness (0-100)'},
            {name: 'chaos', type: 'number', title: 'Chaos Level (0-100)'},
        ]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tagline',
      media: 'image',
    },
  },
})
