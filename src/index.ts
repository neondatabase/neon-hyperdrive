import { Client } from 'pg';

export interface Env {
	NeonHyperdrive: Hyperdrive;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const
		  t0 = performance.now(),
			client = new Client(env.NeonHyperdrive.connectionString),
			cf: any = request.cf ?? { longitude: '-122.473831', latitude: '37.818496' },
			longitude = parseFloat(cf.longitude),
			latitude = parseFloat(cf.latitude);

		try {
			await client.connect();
			const result = await client.query(`
				SELECT 
					id_no, name_en, category,
					'https://whc.unesco.org/en/list/' || id_no || '/' AS link,
					location <-> st_makepoint($1, $2) AS distance
				FROM whc_sites_2021
				ORDER BY distance
				LIMIT 10`,
				[longitude, latitude]
			);

			const ms = performance.now() - t0;
			return Response.json({ ms, sites: result.rows });

		} catch (e) {
			return Response.json({ error: JSON.stringify(e) }, { status: 500 });
		}
	},
};
