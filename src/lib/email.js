import { Resend } from 'resend';

const resend = new Resend('re_gNJpeweV_8ogBEeyTz8hL3LS4PrhuXu1d');



(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Riad Benhalla <no-reply@mhtc-embedded.com>',
    to: ['aimenbennacer1@gmail.com'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();