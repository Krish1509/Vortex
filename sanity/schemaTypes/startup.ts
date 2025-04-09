import { defineType, defineField } from "sanity";

export const startup = defineType({
    name: 'startup',
    title: 'Startup',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
            defineField({
                name: 'slug',
                type: 'slug',
                options: {
                    source: 'title' ,
                    maxLength: 96,
                },
            }),
            defineField({
                name: 'author',
                type: 'reference',
                to: [{type: 'author'}],
            }),
            defineField({
                name: 'views',
                type: 'number',
            }),
                defineField({
                    name: 'description',
                    type: 'text',
                }),
            defineField({
                name: 'category',
                type: 'string',
                validation: (Rule) => Rule.min(1).max(20).required().error("You must select at least one category")
            }),
              defineField({
                    name: 'image',
                    type: 'url',
                    validation: (Rule) => Rule.required().error("You must upload an image"),    
                }),
            defineField({
                name: 'pitch',
                type: 'markdown',
            }),
    ]  , 
});