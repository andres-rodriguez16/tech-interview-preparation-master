
//Clousures
function spyOn(adder) {
  let count = 0
  let valores = new Set()
  let resultados = new Set()
  const prueba = (...args) => {
    count++
    args.forEach(el => valores.add(el))
    const result = adder(...args)
    resultados.add(result)
    return result
  }
  prueba.getCallCount = () => {
    return count;
  }
  prueba.wasCalledWith = (val) => {
    return valores.has(val)
  }
  prueba.returned = (val) => {
    return resultados.has(val)
  }
  return prueba;
}


function adder(n1, n2, n3) { return n1 + n2 + n3; }
const adderSpy = spyOn(adder);
adderSpy(1, 2, 5)
adderSpy(2, 3, 9)
console.log(adderSpy.wasCalledWith(5));
console.log(adderSpy.returned(8), "....");
console.log(adderSpy.getCallCount());

module.exports = spyOn
