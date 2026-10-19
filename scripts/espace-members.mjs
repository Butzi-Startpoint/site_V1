// Génère les comptes de l'espace cohorte.
// Usage : node scripts/espace-members.mjs "Antoine:photoIA" "David:speakerIA:david@mail.fr" ...
//         (format Prénom:motdepasse[:email])
// Affiche la valeur de ESPACE_MEMBERS à coller dans Netlify (mots de passe hachés)
// et un ESPACE_SECRET. Rien n'est écrit dans le dépôt.
import { randomBytes, scryptSync } from 'node:crypto'

const slug = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-')

const args = process.argv.slice(2)
if (!args.length) {
  console.error('Usage : node scripts/espace-members.mjs "Prénom:motdepasse[:email]" ...')
  process.exit(1)
}

const members = args.map((a) => {
  const [name, password, email] = a.split(':')
  if (!name || !password) throw new Error(`Argument invalide : ${a}`)
  const salt = randomBytes(16).toString('hex')
  return { id: slug(name), name, ...(email ? { email } : {}), hash: `${salt}:${scryptSync(password, salt, 64).toString('hex')}` }
})

console.log('— ESPACE_MEMBERS (variable Netlify) —')
console.log(JSON.stringify(members))
console.log('\n— ESPACE_SECRET (à générer une seule fois) —')
console.log(randomBytes(32).toString('base64url'))
