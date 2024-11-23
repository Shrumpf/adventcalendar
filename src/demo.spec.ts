import { describe, it, expect } from 'vitest';
import { can_open, snippets } from '$lib/snippets';

describe('date test', () => {
	it('should be the first day', () => {
		expect(snippets[0].number).to.be.equals(1);
	});

	it('should be openable', () => {
		const today = 1;

		expect(can_open(snippets[0], today)).to.be.true;
		expect(can_open(snippets[23], 24)).to.be.true;
	});

	it('shouldn\'t be openable', () => {
		const today = 1;

		expect(can_open(snippets[2], today)).to.be.false;
	});
});
