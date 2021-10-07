// Generate the points of a rank-1 lattice
// with generating vector z and number of points n.

/***
 * r1lr generates the points of a rank-1 lattice
 * as integers.
 * 
 * @param {Array<number>|number} z    generating vector
 * @param {number} n                  number of points
 * 
 * Note the number of points `n` must be integer
 * and at least 0.
 * The generating vector must be a vector of
 * integers.
 * 
 * The $j$th component of the $k$th point is then
 * generated as
 * $$
 *      x_{k,j} = k z_j \bmod n .
 * $$
 * 
 * @return {Array<Array<number>>} the points as a list
 * of `n` vectors of length `z.length`.
 */
function r1lr(z, n)
{
    return Array.from(new Array(n), (_, i) => z.map(zj => (i * zj) % n));
}

function divmap(a, n)
{
    return a.map(x => x/n);
}

// This is a CommonJS module, and therefore there is
// floating around `module.exports` already:
module.exports = { r1lr, divmap };
// Note that there is also an `exports` which references
// `module.exports` but if you assign to `exports` then
// you just reassign that variable and `module.exports`
// will still point to its original value...