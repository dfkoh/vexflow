// VexFlow - Basic Tests

Vex.Flow.Test.TimeSignature = {}

Vex.Flow.Test.TimeSignature.Start = function() {
  module("TimeSignature");
  Vex.Flow.Test.runTest("Basic Time Signatures", Vex.Flow.Test.TimeSignature.basic);
  Vex.Flow.Test.runRaphaelTest("Basic Time Signatures (Raphael)", 
      Vex.Flow.Test.TimeSignature.basic);
  Vex.Flow.Test.runTest("Big Signature Test", Vex.Flow.Test.TimeSignature.big);
  Vex.Flow.Test.runRaphaelTest("Big Signature Test (Raphael)", 
      Vex.Flow.Test.TimeSignature.big);

}

Vex.Flow.Test.TimeSignature.basic = function(options, contextBuilder) {
  var ctx = new contextBuilder(options.canvas_sel, 400, 120);
  var stave = new Vex.Flow.Stave(10, 10, 300);

  stave.addTimeSignature("2/2");
  stave.addTimeSignature("3/4");
  stave.addTimeSignature("4/4");
  stave.addTimeSignature("6/8");
  stave.addTimeSignature("C");
  stave.addTimeSignature("C|");

  stave.setContext(ctx);
  stave.draw();

  ok(true, "all pass");
}

Vex.Flow.Test.TimeSignature.big = function(options, contextBuilder) {
  var ctx = new contextBuilder(options.canvas_sel, 400, 120);
  var stave = new Vex.Flow.Stave(10, 10, 300);

  stave.addTimeSignature("12/8");
  stave.addTimeSignature("7/16");
  stave.addTimeSignature("1234567/890");
  stave.addTimeSignature("987/654321");

  stave.setContext(ctx);
  stave.draw();

  ok(true, "all pass");
}
