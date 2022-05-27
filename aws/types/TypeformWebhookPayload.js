/**
 * @typedef TypeformWebhookPayload
 * @property {string} event_id
 * @property {string} event_type
 * @property {TypeformWebHookFormResponse} form_response
 */

/**
 * @typedef TypeformWebHookFormResponse
 * @property {string} form_id
 * @property {string} token
 * @property {string} submitted_at
 * @property {string} landed_at
 * @property {{score: number}} calculated
 * @property {TypeformVariable[]} variables
 * @property {TypeformDefinition} definition
 * @property {TypeformAnswer[]} answers
 */

/**
 * @typedef TypeformVariable
 * @property {string} key
 * @property {"number"|"text"} type
 * @property {number} number
 * @property {string} text
 */

module.exports.Example_TypeformWebhookPayload = {
  "event_id": "01G43CD3FF0F592WWDD4N8SJMR",
  "event_type": "form_response",
  "form_response": {
    "form_id": "Wudz4qvi",
    "token": "3icuxtq22u4t0aiam4bb3icum8uiytya",
    "landed_at": "2022-05-27T18:26:29Z",
    "submitted_at": "2022-05-27T18:28:04Z",
    "definition": {
      "id": "Wudz4qvi",
      "title": "Story Collection Form (v2)",
      "fields": [
        {
          "id": "0pWPOTkeJ4ou",
          "ref": "6ef88fc2-8e51-4f13-a9ac-750afa26b3f0",
          "type": "yes_no",
          "title": "*Are you 13 or older? *",
          "properties": {}
        },
        {
          "id": "9k5fYUBAnLyl",
          "ref": "d07a0417-c7f7-497d-8897-5fc5f5734c3d",
          "type": "short_text",
          "title": "*Does this place have a name?*\n\n*If so, what is it? If not, what would you call it? *",
          "properties": {}
        },
        {
          "id": "ONGanBAnwVcb",
          "ref": "6639271f-8636-48f7-9a52-8df8120dad37",
          "type": "long_text",
          "title": "*Tell us your story about **{{field:d07a0417-c7f7-497d-8897-5fc5f5734c3d}}** *",
          "properties": {}
        },
        {
          "id": "kiRUTvgxRGEU",
          "ref": "38e8595e-f788-447c-bc31-49e5beb47f9a",
          "type": "multiple_choice",
          "title": "*What is/was the main function of **{{field:d07a0417-c7f7-497d-8897-5fc5f5734c3d}}**?* ",
          "properties": {},
          "allow_multiple_selections": true,
          "allow_other_choice": true,
          "choices": [
            {
              "id": "pTVi55eUZVC5",
              "label": "Amusement Park"
            },
            {
              "id": "PPRoCFEHqxeB",
              "label": "Bakery"
            },
            {
              "id": "hTdtU8XjFK4b",
              "label": "Barber Shop / Beauty Shop"
            },
            {
              "id": "hRkeGYXsHnoS",
              "label": "Bookshop"
            },
            {
              "id": "dNhxkyKfrrxJ",
              "label": "Boutique / Shop"
            },
            {
              "id": "puJmFr9WErw8",
              "label": "Bridge"
            },
            {
              "id": "8mG7TvKKqdWP",
              "label": "Business"
            },
            {
              "id": "9YTc2A61efkp",
              "label": "Cabin"
            },
            {
              "id": "svYABZoog2Go",
              "label": "Café / Coffee Shop"
            },
            {
              "id": "YXDQonRwArfO",
              "label": "Campground"
            },
            {
              "id": "Dll4fh2xyN0i",
              "label": "Cemetery"
            },
            {
              "id": "1b8ALKPXqmxv",
              "label": "Club / Dance Hall"
            },
            {
              "id": "6KQqpZzWLPyt",
              "label": "Community Center / Recreation Center"
            },
            {
              "id": "obMwqe8TD10v",
              "label": "Doctor's Office"
            },
            {
              "id": "2s7s4TAUpPKS",
              "label": "Garden / Greenhouse / Conservatory"
            },
            {
              "id": "uH6gLrNXPQvA",
              "label": "Government Building"
            },
            {
              "id": "fOJ4bbBl8wSG",
              "label": "Grocery Store"
            },
            {
              "id": "D3Hqt5vJLnDX",
              "label": "Hardware Store"
            },
            {
              "id": "3e6ADtK5i0wY",
              "label": "Historic Site"
            },
            {
              "id": "JcGqfCeQ5Xic",
              "label": "Home"
            },
            {
              "id": "X63LvvCYScMa",
              "label": "Hotel"
            },
            {
              "id": "KrpHNuItER8k",
              "label": "Ice Cream Shop"
            },
            {
              "id": "KgH5kOBD2Pdx",
              "label": "Library"
            },
            {
              "id": "CLOMonPIg92o",
              "label": "Lighthouse"
            },
            {
              "id": "Z5ozh0SVmuQk",
              "label": "Market"
            },
            {
              "id": "dmMiSg7fEufY",
              "label": "Memorial"
            },
            {
              "id": "2xoRMpdMmUdh",
              "label": "Movie Theater"
            },
            {
              "id": "FwMqG0rx1bBK",
              "label": "Museum"
            },
            {
              "id": "q6NPPH8rgT9M",
              "label": "Music Venue"
            },
            {
              "id": "mtWW4mWGbXH9",
              "label": "Park"
            },
            {
              "id": "tF0nIvWgPBW2",
              "label": "Performance Space"
            },
            {
              "id": "nLJZGdalBpfv",
              "label": "Pharmacy"
            },
            {
              "id": "Yq8EmTz53NtQ",
              "label": "Place of Worship / Sacred Site"
            },
            {
              "id": "lz2itSntDPsN",
              "label": "Playground"
            },
            {
              "id": "hWJJMupxW0iT",
              "label": "Restaurant / Bar"
            },
            {
              "id": "vA5RaKqI9NRA",
              "label": "Roadside Attraction"
            },
            {
              "id": "C370Hpszcfzl",
              "label": "School / College / University"
            },
            {
              "id": "IlDHqX8g3MY4",
              "label": "Sculpture Garden"
            },
            {
              "id": "jWMcPuGPurrI",
              "label": "Skate Park"
            },
            {
              "id": "jxje1E62m4FG",
              "label": "Senior Center"
            },
            {
              "id": "VQoNqyX2FrE5",
              "label": "Shopping Mall"
            },
            {
              "id": "EMwRecdkHW4h",
              "label": "Soda Fountain"
            },
            {
              "id": "Zz8IrqLQhFF5",
              "label": "Street / Intersection"
            },
            {
              "id": "BW5loqLmW1we",
              "label": "Theater"
            },
            {
              "id": "919TYNN7xy4f",
              "label": "Visual / Creative Arts Space (Gallery / Studio)"
            },
            {
              "id": "dzETDOfYgdIn",
              "label": "Youth / Teen Center"
            }
          ]
        },
        {
          "id": "LwSMnEdjg3lo",
          "ref": "46e4cd9c-8c4d-4b8b-a97f-8cffeac885b4",
          "type": "short_text",
          "title": "*In what town or community is/was **{{field:d07a0417-c7f7-497d-8897-5fc5f5734c3d}}** located? *",
          "properties": {}
        },
        {
          "id": "25LtGwnYl9m9",
          "ref": "e1fe2e1d-d8fc-4789-9760-e3d65742a888",
          "type": "short_text",
          "title": "*What is/was the street address of **{{field:d07a0417-c7f7-497d-8897-5fc5f5734c3d}}**? *",
          "properties": {}
        },
        {
          "id": "NHUKT3EzpMEQ",
          "ref": "dfafbf82-0beb-45ca-b91b-25408c3fd528",
          "type": "number",
          "title": "*What is the zip code where **{{field:d07a0417-c7f7-497d-8897-5fc5f5734c3d}}** is/was located? *",
          "properties": {}
        },
        {
          "id": "Xpby4jkXPJGo",
          "ref": "ad167567-409c-4f1d-b75b-d9adb941a1c9",
          "type": "yes_no",
          "title": "*Is **{{field:d07a0417-c7f7-497d-8897-5fc5f5734c3d}}** currently a private residence? *",
          "properties": {}
        },
        {
          "id": "veG6QCVqbLQm",
          "ref": "acc250c4-8a0c-4b4c-91aa-b26291699053",
          "type": "yes_no",
          "title": "*Does this place still exist? *",
          "properties": {}
        },
        {
          "id": "PCT92ywkggUp",
          "ref": "ccf1dffb-fdaf-47e2-9659-aaebca258a24",
          "type": "yes_no",
          "title": "*Do you have images of **{{field:d07a0417-c7f7-497d-8897-5fc5f5734c3d}}** to share? *",
          "properties": {}
        },
        {
          "id": "J429I5JhdsSq",
          "ref": "b2199c8e-d99b-4475-a220-1baae1ecd014",
          "type": "file_upload",
          "title": "*Upload your image.*",
          "properties": {}
        },
        {
          "id": "cCtnKNF62tdD",
          "ref": "01FP8R28D7BXV30MRKD76VD6G8",
          "type": "short_text",
          "title": "*What's your first name? *",
          "properties": {}
        },
        {
          "id": "TkcWAwJKtA0t",
          "ref": "4a1e3e43-f63c-4928-b9b3-4ed5407bf754",
          "type": "short_text",
          "title": "*What's your last name? *",
          "properties": {}
        },
        {
          "id": "R5tkVz3rTzyV",
          "ref": "e153d8d1-c3a5-4ea4-8dc2-96a64978c0e3",
          "type": "email",
          "title": "*What's your email address? *",
          "properties": {}
        },
        {
          "id": "YyAwGwFFhcv9",
          "ref": "57a24f4f-8598-4f92-96b1-8ff3c93af350",
          "type": "short_text",
          "title": "*In what community do you currently live? *",
          "properties": {}
        },
        {
          "id": "JsiJT53nZ7hA",
          "ref": "d67e61b7-2098-4493-b195-8ab3c4461f78",
          "type": "multiple_choice",
          "title": "*Select your age range.* ",
          "properties": {},
          "choices": [
            {
              "id": "v86f6NG7OcRh",
              "label": "13-17"
            },
            {
              "id": "0fnk58FSMbY6",
              "label": "18-26"
            },
            {
              "id": "j5Vqgt1qr0s2",
              "label": "27-33"
            },
            {
              "id": "bMkShcIhUxRG",
              "label": "34-41"
            },
            {
              "id": "90tY5wBOryWq",
              "label": "42-49"
            },
            {
              "id": "0LwR8ogFp0G5",
              "label": "50-57"
            },
            {
              "id": "A7weepgQJKuC",
              "label": "58-64"
            },
            {
              "id": "xsvXeOrCD2AE",
              "label": "65-76"
            },
            {
              "id": "EnMZMZs9vsB9",
              "label": "77-85"
            },
            {
              "id": "CMkZ5YMqqbIi",
              "label": "86-94"
            },
            {
              "id": "NkNSZ1hybQr8",
              "label": "95 or older"
            },
            {
              "id": "rCYsgR16AyX0",
              "label": "Prefer not to answer"
            }
          ]
        },
        {
          "id": "QXNwuNPOl9Au",
          "ref": "6abdaa3e-addf-4a4d-b0ad-d7e2cc0b7832",
          "type": "short_text",
          "title": "*What is your race/ethnicity/tribal affiliation? *",
          "properties": {}
        },
        {
          "id": "siMgqnMbaPOD",
          "ref": "d56234ba-c019-4406-b9e2-a62000c03712",
          "type": "short_text",
          "title": "*What is your gender? *",
          "properties": {}
        },
        {
          "id": "vzq9hhEpRtB5",
          "ref": "2eb4f850-e78f-4b1b-9196-ca1140df7f3f",
          "type": "long_text",
          "title": "*Is there anything you’d like to share related to this project/website? Is there an organization you think we should connect with to encourage additions to the North Star Story Map?*",
          "properties": {}
        }
      ]
    },
    "answers": [
      {
        "type": "boolean",
        "boolean": true,
        "field": {
          "id": "0pWPOTkeJ4ou",
          "type": "yes_no",
          "ref": "6ef88fc2-8e51-4f13-a9ac-750afa26b3f0"
        }
      },
      {
        "type": "text",
        "text": "Test of a test",
        "field": {
          "id": "9k5fYUBAnLyl",
          "type": "short_text",
          "ref": "d07a0417-c7f7-497d-8897-5fc5f5734c3d"
        }
      },
      {
        "type": "text",
        "text": "it's nothing more than a test\n\ntest test test",
        "field": {
          "id": "ONGanBAnwVcb",
          "type": "long_text",
          "ref": "6639271f-8636-48f7-9a52-8df8120dad37"
        }
      },
      {
        "type": "choices",
        "choices": {
          "labels": [
            "Amusement Park",
            "Bakery",
            "Barber Shop / Beauty Shop"
          ]
        },
        "field": {
          "id": "kiRUTvgxRGEU",
          "type": "multiple_choice",
          "ref": "38e8595e-f788-447c-bc31-49e5beb47f9a"
        }
      },
      {
        "type": "text",
        "text": "Testville",
        "field": {
          "id": "LwSMnEdjg3lo",
          "type": "short_text",
          "ref": "46e4cd9c-8c4d-4b8b-a97f-8cffeac885b4"
        }
      },
      {
        "type": "text",
        "text": "Test, test, TST",
        "field": {
          "id": "25LtGwnYl9m9",
          "type": "short_text",
          "ref": "e1fe2e1d-d8fc-4789-9760-e3d65742a888"
        }
      },
      {
        "type": "number",
        "number": 12345,
        "field": {
          "id": "NHUKT3EzpMEQ",
          "type": "number",
          "ref": "dfafbf82-0beb-45ca-b91b-25408c3fd528"
        }
      },
      {
        "type": "boolean",
        "boolean": false,
        "field": {
          "id": "Xpby4jkXPJGo",
          "type": "yes_no",
          "ref": "ad167567-409c-4f1d-b75b-d9adb941a1c9"
        }
      },
      {
        "type": "boolean",
        "boolean": true,
        "field": {
          "id": "veG6QCVqbLQm",
          "type": "yes_no",
          "ref": "acc250c4-8a0c-4b4c-91aa-b26291699053"
        }
      },
      {
        "type": "boolean",
        "boolean": true,
        "field": {
          "id": "PCT92ywkggUp",
          "type": "yes_no",
          "ref": "ccf1dffb-fdaf-47e2-9659-aaebca258a24"
        }
      },
      {
        "type": "file_url",
        "file_url": "https://api.typeform.com/responses/files/74b9d4e868a18310fe212457f19628f1a4f6f4eae22c5237e9f0ffb26da57b3c/94411.jpg",
        "field": {
          "id": "J429I5JhdsSq",
          "type": "file_upload",
          "ref": "b2199c8e-d99b-4475-a220-1baae1ecd014"
        }
      },
      {
        "type": "text",
        "text": "Tester",
        "field": {
          "id": "cCtnKNF62tdD",
          "type": "short_text",
          "ref": "01FP8R28D7BXV30MRKD76VD6G8"
        }
      },
      {
        "type": "text",
        "text": "Testerton",
        "field": {
          "id": "TkcWAwJKtA0t",
          "type": "short_text",
          "ref": "4a1e3e43-f63c-4928-b9b3-4ed5407bf754"
        }
      },
      {
        "type": "email",
        "email": "test@example.com",
        "field": {
          "id": "R5tkVz3rTzyV",
          "type": "email",
          "ref": "e153d8d1-c3a5-4ea4-8dc2-96a64978c0e3"
        }
      },
      {
        "type": "text",
        "text": "Testville",
        "field": {
          "id": "YyAwGwFFhcv9",
          "type": "short_text",
          "ref": "57a24f4f-8598-4f92-96b1-8ff3c93af350"
        }
      },
      {
        "type": "choice",
        "choice": {
          "label": "34-41"
        },
        "field": {
          "id": "JsiJT53nZ7hA",
          "type": "multiple_choice",
          "ref": "d67e61b7-2098-4493-b195-8ab3c4461f78"
        }
      },
      {
        "type": "text",
        "text": "Test",
        "field": {
          "id": "QXNwuNPOl9Au",
          "type": "short_text",
          "ref": "6abdaa3e-addf-4a4d-b0ad-d7e2cc0b7832"
        }
      },
      {
        "type": "text",
        "text": "Test",
        "field": {
          "id": "siMgqnMbaPOD",
          "type": "short_text",
          "ref": "d56234ba-c019-4406-b9e2-a62000c03712"
        }
      },
      {
        "type": "text",
        "text": "Test test test",
        "field": {
          "id": "vzq9hhEpRtB5",
          "type": "long_text",
          "ref": "2eb4f850-e78f-4b1b-9196-ca1140df7f3f"
        }
      }
    ]
  }
}