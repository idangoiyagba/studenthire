import { supabase } from './supabaseClient';

export async function saveJob(job: any, user_email = 'test@studenthire.com') {
  const { job_title, company_name, job_city, job_country, job_apply_link } = job;

  const { data, error } = await supabase.from('saved_jobs').insert([
    {
      title: job_title,
      company: company_name,
      location: `${job_city}, ${job_country}`,
      url: job_apply_link,
      user_email,
    },
  ]);

  if (error) throw error;
  return data;
}