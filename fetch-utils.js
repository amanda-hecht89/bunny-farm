// Create your own supabase database using the provided seeds.sql file
const SUPABASE_URL = 'https://lrkvacapghknfzyfbduq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxya3ZhY2FwZ2hrbmZ6eWZiZHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDMzNzksImV4cCI6MTk2Nzg3OTM3OX0.R4JDMarLJDInohMRIVMNLERvl6nc2GLUQI8t5Dt8mFw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function getFamilies() {
    // fetch all families and their bunnies
    const response = await client.from('loving_families').select('*, fuzzy_bunnies (*)');
    console.log(response.data);
    return checkError(response);
}

export async function deleteBunny(id) {
    // delete a single bunny using the id argument
    const response = await client.from('').delete().eq('id', id);
    return checkError(response);
}

export async function createBunny(bunny) {
    // create a bunny using the bunny argument
    const response = await client.from('fuzzy_bunnies').insert({ name: bunny.name, family_id: bunny.family_id });
    return checkError(response);
}

// MARTHA STEWART (PRE-MADE) FUNCTIONS

export async function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./families');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
