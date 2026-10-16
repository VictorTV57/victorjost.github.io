import { getCollection } from 'astro:content';
import { steps } from '../data/parcours';

export const CATEGORIES = ['epitech', 'perso', 'entreprise'] as const;

const byOrder = (a: { data: { order: number } }, b: { data: { order: number } }) => a.data.order - b.data.order;

export async function getProjects() {
  return (await getCollection('projects')).sort(byOrder);
}

export async function getHackathons() {
  return (await getCollection('hackathons')).sort(byOrder);
}

// Pages de détail : partagées par les versions française et anglaise de chaque route [id]

export async function projectPaths() {
  return (await getProjects()).map((project) => ({ params: { id: project.id }, props: { project } }));
}

export async function hackathonPaths() {
  return (await getHackathons()).map((hackathon) => ({ params: { id: hackathon.id }, props: { hackathon } }));
}

export function stepPaths() {
  return steps.map((step) => ({ params: { id: step.id }, props: { step } }));
}
