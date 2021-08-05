Search.setIndex({docnames:["api/configuration","api/hls-model","api/profiling","autodoc/hls4ml","autodoc/hls4ml.converters","autodoc/hls4ml.converters.keras","autodoc/hls4ml.model","autodoc/hls4ml.model.optimizer","autodoc/hls4ml.model.optimizer.passes","autodoc/hls4ml.report","autodoc/hls4ml.templates","autodoc/hls4ml.utils","autodoc/hls4ml.writer","command","concepts","index","reference","release_notes","setup","status"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["api/configuration.rst","api/hls-model.rst","api/profiling.rst","autodoc/hls4ml.rst","autodoc/hls4ml.converters.rst","autodoc/hls4ml.converters.keras.rst","autodoc/hls4ml.model.rst","autodoc/hls4ml.model.optimizer.rst","autodoc/hls4ml.model.optimizer.passes.rst","autodoc/hls4ml.report.rst","autodoc/hls4ml.templates.rst","autodoc/hls4ml.utils.rst","autodoc/hls4ml.writer.rst","command.rst","concepts.rst","index.rst","reference.rst","release_notes.rst","setup.rst","status.rst"],objects:{"":{hls4ml:[3,0,0,"-"]},"hls4ml.converters":{convert_from_config:[4,1,1,""],convert_from_keras_model:[4,1,1,""],keras:[5,0,0,"-"],keras_to_hls:[4,0,0,"-"],parse_yaml_config:[4,1,1,""]},"hls4ml.converters.keras":{convolution:[5,0,0,"-"],core:[5,0,0,"-"],graph:[5,0,0,"-"],merge:[5,0,0,"-"],pooling:[5,0,0,"-"],reshape:[5,0,0,"-"],reshaping:[5,0,0,"-"]},"hls4ml.converters.keras.convolution":{parse_conv1d_layer:[5,1,1,""],parse_conv2d_layer:[5,1,1,""]},"hls4ml.converters.keras.core":{BinaryQuantizer:[5,2,1,""],TernaryQuantizer:[5,2,1,""],parse_activation_layer:[5,1,1,""],parse_batchnorm_layer:[5,1,1,""],parse_dense_layer:[5,1,1,""],parse_input_layer:[5,1,1,""]},"hls4ml.converters.keras.graph":{parse_garnet_layer:[5,1,1,""]},"hls4ml.converters.keras.merge":{parse_merge_layer:[5,1,1,""]},"hls4ml.converters.keras.pooling":{parse_global_pooling_layer:[5,1,1,""],parse_pooling_layer:[5,1,1,""]},"hls4ml.converters.keras.reshape":{parse_conv2d_layer:[5,1,1,""],parse_permute_layer:[5,1,1,""],parse_reshape_layer:[5,1,1,""]},"hls4ml.converters.keras.reshaping":{parse_zeropadding1d_layer:[5,1,1,""],parse_zeropadding2d_layer:[5,1,1,""]},"hls4ml.converters.keras_to_hls":{KerasFileReader:[4,2,1,""],KerasModelReader:[4,2,1,""],compute_padding_1d:[4,1,1,""],compute_padding_2d:[4,1,1,""],get_qkeras_quantization:[4,1,1,""],get_supported_keras_layers:[4,1,1,""],keras_handler:[4,1,1,""],keras_to_hls:[4,1,1,""],parse_data_format:[4,1,1,""],parse_default_keras_layer:[4,1,1,""],register_keras_layer_handler:[4,1,1,""]},"hls4ml.converters.keras_to_hls.KerasFileReader":{get_weights_data:[4,3,1,""],get_weights_shape:[4,3,1,""]},"hls4ml.converters.keras_to_hls.KerasModelReader":{get_weights_data:[4,3,1,""],get_weights_shape:[4,3,1,""]},"hls4ml.model":{hls_layers:[6,0,0,"-"],hls_model:[6,0,0,"-"],optimizer:[7,0,0,"-"],profiling:[6,0,0,"-"]},"hls4ml.model.hls_layers":{Activation:[6,2,1,""],ArrayVariable:[6,2,1,""],BatchNormalization:[6,2,1,""],BiasAdd:[6,2,1,""],CompressedType:[6,2,1,""],CompressedWeightVariable:[6,2,1,""],Concatenate:[6,2,1,""],Conv1D:[6,2,1,""],Conv2D:[6,2,1,""],Conv2DBatchnorm:[6,2,1,""],Dense:[6,2,1,""],DepthwiseConv2D:[6,2,1,""],Dot:[6,2,1,""],ExponentPrecisionType:[6,2,1,""],ExponentType:[6,2,1,""],ExponentWeightVariable:[6,2,1,""],FixedPrecisionType:[6,2,1,""],GarNet:[6,2,1,""],GarNetStack:[6,2,1,""],GlobalPooling1D:[6,2,1,""],GlobalPooling2D:[6,2,1,""],HLSType:[6,2,1,""],InplaceVariable:[6,2,1,""],Input:[6,2,1,""],IntegerPrecisionType:[6,2,1,""],Layer:[6,2,1,""],Merge:[6,2,1,""],PReLU:[6,2,1,""],PackedType:[6,2,1,""],ParametrizedActivation:[6,2,1,""],Pooling1D:[6,2,1,""],Pooling2D:[6,2,1,""],Quantizer:[6,2,1,""],Reshape:[6,2,1,""],Resize:[6,2,1,""],SeparableConv1D:[6,2,1,""],SeparableConv2D:[6,2,1,""],Softmax:[6,2,1,""],StreamVariable:[6,2,1,""],Transpose:[6,2,1,""],Variable:[6,2,1,""],WeightVariable:[6,2,1,""],XnorPrecisionType:[6,2,1,""],ZeroPadding1D:[6,2,1,""],ZeroPadding2D:[6,2,1,""],find_minimum_width:[6,1,1,""],register_layer:[6,1,1,""]},"hls4ml.model.hls_layers.Activation":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.ArrayVariable":{definition_cpp:[6,3,1,""],get_shape:[6,3,1,""],size:[6,3,1,""],size_cpp:[6,3,1,""]},"hls4ml.model.hls_layers.BatchNormalization":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.BiasAdd":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.CompressedType":{definition_cpp:[6,3,1,""]},"hls4ml.model.hls_layers.CompressedWeightVariable":{next:[6,3,1,""]},"hls4ml.model.hls_layers.Concatenate":{config_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.Conv1D":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.Conv2D":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.Conv2DBatchnorm":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.Dense":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.DepthwiseConv2D":{initialize:[6,3,1,""]},"hls4ml.model.hls_layers.Dot":{config_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.ExponentType":{definition_cpp:[6,3,1,""]},"hls4ml.model.hls_layers.ExponentWeightVariable":{next:[6,3,1,""]},"hls4ml.model.hls_layers.GarNet":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""],ref_impl:[6,4,1,""]},"hls4ml.model.hls_layers.GlobalPooling1D":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.GlobalPooling2D":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.HLSType":{definition_cpp:[6,3,1,""]},"hls4ml.model.hls_layers.InplaceVariable":{definition_cpp:[6,3,1,""],get_shape:[6,3,1,""],size_cpp:[6,3,1,""]},"hls4ml.model.hls_layers.Input":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.Layer":{add_bias:[6,3,1,""],add_output_variable:[6,3,1,""],add_weights:[6,3,1,""],add_weights_variable:[6,3,1,""],config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],get_attr:[6,3,1,""],get_input_node:[6,3,1,""],get_input_variable:[6,3,1,""],get_layer_precision:[6,3,1,""],get_numbers_cpp:[6,3,1,""],get_output_nodes:[6,3,1,""],get_output_variable:[6,3,1,""],get_variables:[6,3,1,""],get_weights:[6,3,1,""],initialize:[6,3,1,""],make_array_variable:[6,3,1,""],make_stream_variable:[6,3,1,""],precision_cpp:[6,3,1,""],set_attr:[6,3,1,""]},"hls4ml.model.hls_layers.Merge":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.PReLU":{function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.PackedType":{definition_cpp:[6,3,1,""]},"hls4ml.model.hls_layers.ParametrizedActivation":{function_cpp:[6,3,1,""]},"hls4ml.model.hls_layers.Pooling1D":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.Pooling2D":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.Reshape":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.Resize":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.SeparableConv1D":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.SeparableConv2D":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.Softmax":{initialize:[6,3,1,""]},"hls4ml.model.hls_layers.StreamVariable":{get_shape:[6,3,1,""],size:[6,3,1,""],size_cpp:[6,3,1,""]},"hls4ml.model.hls_layers.Transpose":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.WeightVariable":{definition_cpp:[6,3,1,""],next:[6,3,1,""],update_precision:[6,3,1,""]},"hls4ml.model.hls_layers.ZeroPadding1D":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_layers.ZeroPadding2D":{config_cpp:[6,3,1,""],function_cpp:[6,3,1,""],initialize:[6,3,1,""]},"hls4ml.model.hls_model":{HLSConfig:[6,2,1,""],HLSModel:[6,2,1,""]},"hls4ml.model.hls_model.HLSConfig":{get_bram_size:[6,3,1,""],get_compression:[6,3,1,""],get_config_value:[6,3,1,""],get_conv_implementation:[6,3,1,""],get_layer_config:[6,3,1,""],get_layer_config_value:[6,3,1,""],get_output_dir:[6,3,1,""],get_precision:[6,3,1,""],get_project_name:[6,3,1,""],get_reuse_factor:[6,3,1,""],get_strategy:[6,3,1,""],get_target_cycles:[6,3,1,""],is_resource_strategy:[6,3,1,""]},"hls4ml.model.hls_model.HLSModel":{build:[6,3,1,""],compile:[6,3,1,""],get_bram_variables:[6,3,1,""],get_input_variables:[6,3,1,""],get_layer_output_variable:[6,3,1,""],get_layers:[6,3,1,""],get_output_variables:[6,3,1,""],get_weights_data:[6,3,1,""],insert_node:[6,3,1,""],make_node:[6,3,1,""],next_layer:[6,3,1,""],predict:[6,3,1,""],register_bram_variable:[6,3,1,""],register_output_variable:[6,3,1,""],remove_node:[6,3,1,""],replace_node:[6,3,1,""],trace:[6,3,1,""],write:[6,3,1,""]},"hls4ml.model.optimizer":{optimizer:[7,0,0,"-"],passes:[8,0,0,"-"]},"hls4ml.model.optimizer.optimizer":{OptimizerPass:[7,2,1,""],get_available_passes:[7,1,1,""],get_optimizer:[7,1,1,""],optimize_model:[7,1,1,""],register_pass:[7,1,1,""]},"hls4ml.model.optimizer.optimizer.OptimizerPass":{match:[7,3,1,""],transform:[7,3,1,""]},"hls4ml.model.optimizer.passes":{bn_fuse:[8,0,0,"-"],bn_quant:[8,0,0,"-"],clone:[8,0,0,"-"],conv_same_pad:[8,0,0,"-"],fuse_biasadd:[8,0,0,"-"],multi_dense:[8,0,0,"-"],nop:[8,0,0,"-"],pointwise:[8,0,0,"-"],repack_stream:[8,0,0,"-"]},"hls4ml.model.optimizer.passes.bn_fuse":{FuseBatchNormalization:[8,2,1,""]},"hls4ml.model.optimizer.passes.bn_fuse.FuseBatchNormalization":{match:[8,3,1,""],transform:[8,3,1,""]},"hls4ml.model.optimizer.passes.bn_quant":{BatchNormalizationQuantizedTanh:[8,2,1,""],MergeBatchNormAndQuantizedTanh:[8,2,1,""],QuantizeDenseOutput:[8,2,1,""]},"hls4ml.model.optimizer.passes.bn_quant.BatchNormalizationQuantizedTanh":{config_cpp:[8,3,1,""],function_cpp:[8,3,1,""],initialize:[8,3,1,""]},"hls4ml.model.optimizer.passes.bn_quant.MergeBatchNormAndQuantizedTanh":{match:[8,3,1,""],transform:[8,3,1,""]},"hls4ml.model.optimizer.passes.bn_quant.QuantizeDenseOutput":{match:[8,3,1,""],transform:[8,3,1,""]},"hls4ml.model.optimizer.passes.clone":{Clone:[8,2,1,""],CloneOutput:[8,2,1,""]},"hls4ml.model.optimizer.passes.clone.Clone":{config_cpp:[8,3,1,""],function_cpp:[8,3,1,""],initialize:[8,3,1,""]},"hls4ml.model.optimizer.passes.clone.CloneOutput":{match:[8,3,1,""],transform:[8,3,1,""]},"hls4ml.model.optimizer.passes.conv_same_pad":{InsertZeroPaddingBeforeConv1D:[8,2,1,""],InsertZeroPaddingBeforeConv2D:[8,2,1,""]},"hls4ml.model.optimizer.passes.conv_same_pad.InsertZeroPaddingBeforeConv1D":{match:[8,3,1,""],transform:[8,3,1,""]},"hls4ml.model.optimizer.passes.conv_same_pad.InsertZeroPaddingBeforeConv2D":{match:[8,3,1,""],transform:[8,3,1,""]},"hls4ml.model.optimizer.passes.fuse_biasadd":{FuseBiasAdd:[8,2,1,""]},"hls4ml.model.optimizer.passes.fuse_biasadd.FuseBiasAdd":{match:[8,3,1,""],transform:[8,3,1,""]},"hls4ml.model.optimizer.passes.multi_dense":{ReplaceMultidimensionalDenseWithConv:[8,2,1,""]},"hls4ml.model.optimizer.passes.multi_dense.ReplaceMultidimensionalDenseWithConv":{match:[8,3,1,""],transform:[8,3,1,""]},"hls4ml.model.optimizer.passes.nop":{EliminateLinearActivation:[8,2,1,""]},"hls4ml.model.optimizer.passes.nop.EliminateLinearActivation":{match:[8,3,1,""],transform:[8,3,1,""]},"hls4ml.model.optimizer.passes.pointwise":{OptimizePointwiseConv:[8,2,1,""],PointwiseConv1D:[8,2,1,""],PointwiseConv2D:[8,2,1,""]},"hls4ml.model.optimizer.passes.pointwise.OptimizePointwiseConv":{match:[8,3,1,""],transform:[8,3,1,""]},"hls4ml.model.optimizer.passes.repack_stream":{Broadcast:[8,2,1,""],BroadcastStream:[8,2,1,""],Repack:[8,2,1,""],ReshapeStream:[8,2,1,""]},"hls4ml.model.optimizer.passes.repack_stream.Broadcast":{config_cpp:[8,3,1,""],function_cpp:[8,3,1,""],initialize:[8,3,1,""]},"hls4ml.model.optimizer.passes.repack_stream.BroadcastStream":{match:[8,3,1,""],transform:[8,3,1,""]},"hls4ml.model.optimizer.passes.repack_stream.Repack":{config_cpp:[8,3,1,""],function_cpp:[8,3,1,""],initialize:[8,3,1,""]},"hls4ml.model.optimizer.passes.repack_stream.ReshapeStream":{match:[8,3,1,""],transform:[8,3,1,""]},"hls4ml.model.profiling":{activation_types_hlsmodel:[6,1,1,""],activations_hlsmodel:[6,1,1,""],activations_keras:[6,1,1,""],activations_torch:[6,1,1,""],ap_fixed_WIF:[6,1,1,""],array_to_summary:[6,1,1,""],boxplot:[6,1,1,""],compare:[6,1,1,""],get_unoptimized_hlsmodel:[6,1,1,""],get_ymodel_keras:[6,1,1,""],histogram:[6,1,1,""],numerical:[6,1,1,""],types_boxplot:[6,1,1,""],types_histogram:[6,1,1,""],types_hlsmodel:[6,1,1,""],weights_hlsmodel:[6,1,1,""],weights_keras:[6,1,1,""],weights_torch:[6,1,1,""]},"hls4ml.report":{vivado_report:[9,0,0,"-"]},"hls4ml.report.vivado_report":{parse_vivado_report:[9,1,1,""],read_vivado_report:[9,1,1,""]},"hls4ml.templates":{templates:[10,0,0,"-"],vivado_template:[10,0,0,"-"]},"hls4ml.templates.templates":{Backend:[10,2,1,""],get_backend:[10,1,1,""],register_backend:[10,1,1,""]},"hls4ml.templates.templates.Backend":{get_config_template:[10,3,1,""],get_function_template:[10,3,1,""],get_include_list:[10,3,1,""],register_source:[10,3,1,""],register_templates:[10,3,1,""]},"hls4ml.templates.vivado_template":{VivadoBackend:[10,2,1,""]},"hls4ml.templates.vivado_template.VivadoBackend":{compute_conv1d_instructions:[10,3,1,""],compute_conv2d_instructions:[10,3,1,""],convert_precision_string:[10,3,1,""],get_closest_reuse_factor:[10,3,1,""],get_valid_reuse_factors:[10,3,1,""],product_type:[10,3,1,""],set_closest_reuse_factor:[10,3,1,""],set_target_reuse_factor:[10,3,1,""]},"hls4ml.utils":{config:[11,0,0,"-"],example_models:[11,0,0,"-"],plot:[11,0,0,"-"]},"hls4ml.utils.config":{config_from_keras_model:[11,1,1,""],create_vivado_config:[11,1,1,""]},"hls4ml.utils.example_models":{fetch_example_list:[11,1,1,""],fetch_example_model:[11,1,1,""]},"hls4ml.utils.plot":{add_edge:[11,1,1,""],check_pydot:[11,1,1,""],model_to_dot:[11,1,1,""],plot_model:[11,1,1,""]},"hls4ml.writer":{vivado_writer:[12,0,0,"-"],writers:[12,0,0,"-"]},"hls4ml.writer.vivado_writer":{VivadoWriter:[12,2,1,""]},"hls4ml.writer.vivado_writer.VivadoWriter":{print_array_to_cpp:[12,3,1,""],type_definition_cpp:[12,3,1,""],variable_definition_cpp:[12,3,1,""],write_bridge:[12,3,1,""],write_build_script:[12,3,1,""],write_defines:[12,3,1,""],write_hls:[12,3,1,""],write_nnet_utils:[12,3,1,""],write_parameters:[12,3,1,""],write_project_cpp:[12,3,1,""],write_project_dir:[12,3,1,""],write_project_header:[12,3,1,""],write_tar:[12,3,1,""],write_test_bench:[12,3,1,""],write_weights:[12,3,1,""],write_yml:[12,3,1,""]},"hls4ml.writer.writers":{Writer:[12,2,1,""],get_writer:[12,1,1,""],register_writer:[12,1,1,""]},"hls4ml.writer.writers.Writer":{write_hls:[12,3,1,""]},hls4ml:{converters:[4,0,0,"-"],model:[6,0,0,"-"],report:[9,0,0,"-"],templates:[10,0,0,"-"],utils:[11,0,0,"-"],writer:[12,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"1x1":8,"case":[0,2,6,14,15],"class":[4,5,6,7,8,10,12],"const":0,"default":[0,2,4,6,11,17,18],"export":[6,13,17,18],"final":[6,14],"float":[2,14],"function":[1,4,6,10,11,14,15,17,18],"import":[0,1,2,14,18],"int":[4,11],"new":[6,14,15,17,18,19],"return":[1,4,6,10,11,18],"static":0,"true":[0,6,11,12],"var":[6,12],"while":[0,11,14],Adding:17,And:18,For:[0,13,14,15,18],HLS:[4,11,13,14,15,17,18,19],NNs:19,One:[0,4],The:[0,1,2,4,6,8,11,15,18,19],Then:[0,18],There:[0,18],Use:[11,18],Using:[0,2,14],With:14,_out:6,about:[13,18],abov:[0,14],abs:19,acat:16,accept:14,access:17,accum_t:0,accuraci:2,achiev:[2,14],activ:[0,2,6,8,14,17],activation_types_hlsmodel:6,activations_hlsmodel:6,activations_kera:6,activations_torch:6,add:6,add_bia:6,add_edg:11,add_output_vari:6,add_weight:6,add_weights_vari:6,added:[6,15,17],addit:[0,18],addition:0,advanc:[0,1],advis:11,affect:11,after:[0,1,8,14,17,18],agglomer:14,algorithm:[0,14,15,18],all:[0,1,6,11,13,14,17],allow:[2,11,14,17],along:18,alpha:17,alreadi:[1,14],also:[0,1,14,16,18,19],altern:18,ambigu:6,analysi:14,ani:[0,13,17],ap_fix:[0,4,10,11],ap_fixed_wif:6,ap_int:0,ap_uint:0,apart:18,api:[1,17,18],appear:0,appli:[6,11],applic:14,appropri:[1,2],architectur:[0,14,19],arg:4,argument:[2,4,11,13],arithmet:14,aritifici:0,arrai:[1,6],array_partit:0,array_to_summari:6,arrayvari:6,arxiv:[16,17,19],as_refer:12,aspect:14,aster:17,attempt:6,attribut:[6,8],atyp:[6,12],auto:6,automat:[0,14],avail:[2,11],avoid:2,awar:[14,17],backend:[10,17],backend_cl:10,balanc:14,bare:2,bartsia:17,base:[4,5,6,7,8,10,12],basic:[0,18],batch:[8,17],batchnorm:[6,17],batchnormalization1:0,batchnormalizationquantizedtanh:8,bdt:19,been:[14,19],befor:[1,6,14],beginn:18,below:[0,2,13,19],benefit:14,benjamin:16,best:14,beta:[8,17],better:0,between:[6,8,14],bia:[0,14],bias:[0,6],bias_t:0,biasadd:[6,8],bin:14,binari:[0,8,16,17],binaryquant:5,bit:[0,2,5,6,14],bn_fuse:[3,6,7],bn_quant:[3,6,7],bnn:6,bool:[0,6],boost:16,both:[0,2],box:[2,18],boxplot:[2,6],bring:19,broadcast:8,broadcaststream:8,bug:17,bugfix:17,build:[6,14,17,18],build_prj:18,built:[17,18],calcul:[6,14],california:16,call:[2,4,13,14],calucl:0,can:[0,1,2,6,11,13,14,15,17,18],cern:16,certain:14,champaign:16,chanc:0,chang:[0,11,17],channels_last:4,chapter:[0,18],check:18,check_pydot:11,checkout:0,chep:16,chicago:16,chieh:16,choos:0,chosen:2,chosen_rf:10,cite:16,clazz:6,clock:[0,4],clock_period:[4,11],clockperiod:[0,4],clone:[3,6,7,18],cloneoutput:8,close:10,closest:10,cluster:11,cnn:[17,19],code:[2,14,18,19],colleg:16,collid:14,collis:14,columbia:16,com:[11,15,18],combin:2,come:14,command:[1,17],common:8,commun:14,compactli:14,compar:[2,6,14],compil:[6,17],complet:0,complex:14,compress:[0,6,14,16],compressedtyp:6,compressedweightvari:6,comput:[0,14],compute_conv1d_instruct:10,compute_conv2d_instruct:10,compute_padding_1d:4,compute_padding_2d:4,concaten:[6,17],concept:[0,18],config2:0,config4:0,config:[0,1,2,3,4,5,6,17,18],config_cpp:[6,8],config_fil:4,config_from_keras_model:[0,1,11],config_templ:10,configur:[1,2,4,6,11,13,14,15,17,18],conif:19,connect:[6,16,19],consid:[0,14],construct:[0,6],contact:15,contain:[2,4,14],containig:4,control:[14,18],conv1d:[6,8,17,19],conv2d:[6,8,19],conv2dbatchnorm:6,conv_same_pad:[3,6,7],conveni:6,convers:[4,11,13,14,18],convert:[1,2,3,6,10,11,14,17,18],convert_from_config:4,convert_from_keras_model:[1,4,11],convert_precision_str:10,convolut:[3,4,17,19],core:[3,4],correct:[6,17],correspond:11,cosim:[6,18],cosimul:17,cost:14,cours:16,cover:2,cpp:0,cpu:[2,14],creat:[0,4,6,11,13,14,15,17,18],create_vivado_config:11,creation:14,csim:[1,6,18],csimul:13,current:[0,13,15],custom:[11,17],dat:0,data:[0,2,6,11,14,16],data_format:4,data_read:[5,6],data_t:10,dataflow:14,debug:1,decid:2,decis:[14,16],dedic:18,deep:16,default_precis:11,default_reuse_factor:11,defin:[0,14,18],definition_cpp:6,denot:0,dens:[0,6,8,17],dense1:0,dense2:0,dense_config:0,dense_lat:0,depend:[2,14,19],depict:6,deprec:17,depth:6,depthwiseconv2d:6,describ:[0,13],design:[4,14],destination_dir:10,detail:[13,14,15,18],detector:14,determin:[10,14],develop:[0,15,19],devic:4,diagram:2,dict:[4,6,11],dictionari:[0,1,6,11,17],diego:16,differ:[0,1,2,6,8,14,17,18],differenti:6,dim:0,dim_nam:6,directori:[0,4,11,13,17,18],disabl:18,discuss:18,displai:11,dist_diff:6,distribut:[2,6],dnn:[0,17],doc:4,document:[0,1,13,17,18,19],doe:6,doing:[1,13],done:[0,14,18],dot:[6,11,16],download:[11,18],dpi:11,dst:11,dtype:6,duart:16,duc:16,dure:[10,14],dylan:16,dynam:14,each:[0,1,2,6,14,18],edward:16,effici:14,either:0,element:6,eliminatelinearactiv:8,emul:17,enabl:[11,14,17],energi:14,enhanc:17,ensur:[4,14],entir:11,entri:6,environ:14,equal:10,error:17,escienc:16,especi:17,essenti:14,establish:2,etc:10,evalu:[2,6,14],even:[0,14],event:14,everi:[0,11],everyth:14,exampl:[0,4,6,11,13,17],example_model:[3,18],except:[4,6,11],exist:[6,17],exit:13,expens:14,experi:15,explicitli:14,explor:18,expon:6,exponentprecisiontyp:6,exponenttyp:6,exponentweightvari:6,express:[6,14],extend:2,extra:[2,18],extrem:14,facetgrid:6,factor:[0,4,8,11,14,17],fals:[0,6,9,11,12,17],familiar:18,fast:[14,16],faster:1,fastmachinelearn:18,fc1:0,featur:[15,18],feel:18,fermilab:16,fetch:18,fetch_example_list:[11,18],fetch_example_model:[11,18],field:0,figur:[2,6,14],file:[2,4,6,11,13,17,18],file_nam:10,filesystem:4,filt_height:4,filt_siz:4,filt_width:4,filter:14,find:[6,18],find_minimum_width:6,fine:[0,2,11],finer:0,firmwar:[0,15],first:[6,14,17,18],fix:[0,14,17],fixedprecisiontyp:6,flip:8,flow:17,flvb2104:[0,4,11],fmt:6,fold:8,follow:[6,13,14,18],form:6,format:[0,2,6,11],found:[0,15,18],four:14,fpga:[0,2,4,11,13,14,15,16],fpga_part:[4,11],framework:17,freedom:14,from:[0,1,2,4,6,10,11,14,17,18],full:[13,17,18],full_report:9,fulli:19,function_cpp:[6,8],function_templ:10,further:[0,2,17],fuse:[8,17],fuse_biasadd:[3,6,7],fuse_consecutive_batch_norm:17,fusebatchnorm:8,fusebiasadd:8,g_m:14,gamma:8,garnet:[6,17],garnetstack:6,gather:17,gener:[0,1,4,11,13,14,17,18],get:[1,13,14],get_attr:6,get_available_pass:7,get_backend:10,get_bram_s:6,get_bram_vari:6,get_closest_reuse_factor:10,get_compress:6,get_config_templ:10,get_config_valu:6,get_conv_implement:6,get_function_templ:10,get_include_list:10,get_input_nod:6,get_input_vari:6,get_lay:6,get_layer_config:6,get_layer_config_valu:6,get_layer_output_vari:6,get_layer_precis:6,get_numbers_cpp:6,get_optim:7,get_output_dir:6,get_output_nod:6,get_output_vari:6,get_precis:6,get_project_nam:6,get_qkeras_quant:4,get_reuse_factor:6,get_shap:6,get_strategi:6,get_supported_keras_lay:4,get_target_cycl:6,get_unoptimized_hlsmodel:6,get_valid_reuse_factor:10,get_vari:6,get_weight:6,get_weights_data:[4,6],get_weights_shap:4,get_writ:12,get_ymodel_kera:[1,6],git:18,github:[11,15,17,18,19],giusepp:16,give:[2,14,18],given:[2,11,14,19],globalpooling1d:6,globalpooling2d:6,gmail:15,goal:14,going:19,good:2,gor:17,gpu:14,granular:[0,1,2,11,17],granulr:11,graph:[3,4,6],graphviz:11,greatli:14,grei:2,guglielmo:16,guid:18,h5py:18,had:14,hadron:14,han:16,hand:16,handl:17,handler_func:4,hardwar:14,harri:16,has:[0,11,14,19],have:[0,1,13,19],hawkeye360:16,head:0,help:[1,2,13,14,15],helper:[6,10],here:[0,1,17,18],hierachi:0,high:[14,15],higher:17,highest:14,highli:[11,14],histogram:[2,6],hl4ml:0,hls4ml:[0,1,2,16,17,19],hls4ml_prj:1,hls:[0,1,4,6,11,13,15,18],hls_config:[1,4,11,17],hls_dir:9,hls_layer:[3,5,8],hls_model:[1,2,3,17,18],hls_type:6,hlsconfig:[0,4,6],hlsmodel:[2,4,6],hlstype:6,hoang:16,horizont:11,how:[0,13,15,18],howev:14,hsu:16,http:[11,15,18,19],illinoi:16,imag:11,implement:[0,4,8,10,14,15,16,17,18,19],impli:13,implment:18,importerror:11,improv:14,in_c:10,in_h:10,in_height:4,in_siz:4,in_w:10,in_width:4,inappropri:2,inch:11,includ:[6,15,18,19],include_list:10,independ:14,index:6,index_precis:6,index_t:0,indic:2,individu:1,infer:[10,13,14,15,16],inform:[0,11,14,18],initi:[0,6,8,11,14,17],initialis:2,inplacevari:6,input:[0,1,2,6,8,14,17],input_1:0,input_nam:[4,5,6],input_shap:[4,5],input_t:0,inputdata:0,insert:[0,6,8],insert_nod:6,insertzeropaddingbeforeconv1d:8,insertzeropaddingbeforeconv2d:8,inspect:11,instal:[2,11,17],instanc:11,instead:0,instruct:18,integ:[0,2,6],integerprecisiontyp:[6,10],interest:15,interfac:[1,18],intern:10,interv:[0,14,17],intuit:14,invest:14,io_parallel:[0,4,11],io_seri:[0,4,17],io_stream:[4,17,19],io_typ:[0,4,11],iotyp:[0,4,17,19],is_resource_strategi:6,isn:14,issu:17,its:[0,1],javier:16,jennif:16,jindariani:16,jinst:[14,16],json:[0,11,13,17,18],jupyt:11,just:[0,1,13],kei:[1,6,11],kept:14,kera:[0,1,2,3,4,6,11,13,14,17,18,19],keras_3lay:[0,11,18],keras_3layer_input_featur:0,keras_3layer_predict:0,keras_3layer_weight:0,keras_handl:4,keras_lay:[4,5],keras_model:[1,2,4,6],keras_to_hl:[2,3,18],keras_trac:1,kerasfileread:4,kerash5:[0,4],kerasjson:0,kerasmodelread:4,kernel:[8,14],kernel_s:10,keyword:2,kind:[6,10],know:15,krei:16,kreinar:16,kwarg:6,languag:[14,15],larg:14,larger:[0,17,19],largest:14,last:18,latenc:[0,14,17],latest:[15,19],layer2_out:0,layer2_t:0,layer3_out:0,layer3_t:0,layer4_out:0,layer4_t:0,layer5_out:0,layer:[1,4,6,8,10,11,14,17,19],layer_list:6,layer_nam:[4,6],layernam:0,layertyp:0,leaf:6,learn:[0,11,13,14,15,18],least:2,left:2,let:[0,14,15],level:[14,15],lhc:14,librari:[0,17],licens:18,like:[0,4,6,13,14,15],line:[1,11,17,18],link:18,linux:19,list:[1,6,18,19],live:14,load:2,load_data:2,load_model:2,locat:4,logic:17,loncar:16,longer:14,longform:6,look:[0,4,14],loss:2,low:[2,14],lower:14,lowest:14,lstm:19,machin:[0,11,13,14,15,18],maco:19,made:6,mai:[0,2,4],main:18,make:[2,6],make_array_vari:6,make_nod:6,make_stream_vari:6,mani:14,mark:16,match:[7,8],mathbf:14,matplotlib:[2,6],matrix:14,maurizio:16,max:17,maxim:14,mean:[0,8,14],median:2,merg:[3,4,6,8,17],mergebatchnormandquantizedtanh:8,messag:13,messeg:13,method:[0,2,6],microsecond:14,might:[0,2,18],min:17,mind:14,minim:4,minimum:6,minor:17,minut:18,mit:16,mix:17,mlp:19,mode:17,model:[0,2,3,4,5,11,12,13,14,15,17,18],model_default_t:0,model_nam:11,model_to_dot:11,modul:2,more:[0,2,4,8,11,13,14,18],most:[0,14],move:[17,19],much:[1,14,17],multi:[14,19],multi_dens:[3,6,7],multipl:[6,8,14,17],multipli:14,must:[0,6,14,18],my_keras_model:4,myproject:[0,4,11],n_elem:6,n_in:0,n_input_1_1:0,n_layer_2:0,n_layer_4:0,n_m:14,n_nonzero:0,n_out:0,n_pack:6,n_zero:0,name:[0,1,4,6,7,8,10,11,12,13,17],name_suffix:12,necessari:14,need:[2,14,17,18],nest:11,network:[0,2,14,16,19],neubauer:16,neural:[0,2,14,16,19],neuron:14,new_nod:6,new_precis:6,next:[0,6,18],next_lay:6,ngadiuba:16,nhan:16,nnet:0,nnet_util:10,noah:16,node:[6,7,8],non:2,none:[0,2,6,7,8],nontrivi:14,nop:[3,6,7],norm_diff:6,normal:[0,2,6,8],normalis:17,note:[0,1,6,14,18,19],notebook:11,now:17,npy:0,number:[0,10,13,14],numer:[2,6],numpi:[1,18],object:[1,2,4,6,7,10,11,12,17],obtain:[0,10,17],odir:12,offer:14,offici:17,offlin:14,often:[13,14],old_nod:6,onc:8,one:[0,6,14,17],ones:6,onli:[0,2,14],onnx:[13,18,19],onnx_to_hl:3,open:[2,14,15],oper:17,opportun:0,opt_cl:7,optim:[0,3,6,14,17],optimize_model:7,optimizepointwiseconv:8,optimizerpass:[7,8],optims:17,option:[0,2,4,6,11,13,14,17],order:[14,18],org:[18,19],orient:0,origin:6,other:[0,18,19],ouput:6,our:[1,14,18],out:[17,18],out_nam:6,outpu:6,output:[0,1,4,6,8,13,14,17],output_dir:[1,4,11],output_nam:6,outputdir:[0,4],outputpredict:0,overflow:[2,6],own:0,p07027:[14,16],pack:8,packag:[14,15,16,19],packedtyp:6,pad:10,pad_typ:4,page:[0,1,13,14,15,18,19],paladino:16,paper:14,parallel:[14,17],paramet:[0,4,6,8,11,14,18],parametrizedactiv:6,pars:[4,14,18],parse_activation_lay:5,parse_batchnorm_lay:5,parse_conv1d_lay:5,parse_conv2d_lay:5,parse_data_format:4,parse_default_keras_lay:4,parse_dense_lay:5,parse_garnet_lay:5,parse_global_pooling_lay:5,parse_input_lay:5,parse_merge_lay:5,parse_permute_lay:5,parse_pooling_lay:5,parse_reshape_lay:5,parse_vivado_report:9,parse_yaml_config:4,parse_zeropadding1d_lay:5,parse_zeropadding2d_lay:5,part:[0,14],particl:16,particular:[0,13,18],partit:6,pass:[3,6,7,11],path:[0,4],per:[11,17],perceptron:19,perform:[2,6,14],period:[0,4],philip:16,physic:[14,16],pierini:16,pip:[2,18],pipelin:[0,14,17],plan:15,pleas:[1,4,15,16,18],plot:[2,3,6],plot_model:11,plot_typ:6,plt:2,plug:14,png:11,po2:[6,17],point:[0,2,14],pointwis:[3,6,7],pointwiseconv1d:8,pointwiseconv2d:8,pool:[3,4],pooling1d:6,pooling2d:6,posit:13,possibl:[0,2,6,14,17],post:6,potenti:14,power:14,pragma:[0,6],pre:6,precis:[0,2,4,6,10,11,14,16,17],precision_cpp:6,precomput:14,precsion:0,predict:[0,2,6,14,17],predict_ouput:1,prefer:1,prelu:6,present:4,preserv:14,previou:[6,13,14],previous:17,princip:14,print:[17,18],print_array_to_cpp:12,prj:18,problem:14,process:14,produc:[0,2,6,14],product:10,product_typ:10,profil:[1,3,17,18],program:[13,14],project:[0,1,4,13,14,17,18],project_nam:[4,11],projectnam:[0,4],proper:4,protobuf:[17,18],prototyp:[1,14,19],proven:14,provid:[0,2,4,13,14,18,19],proxi:6,pseudo:2,put:6,pydot:11,pypi:[17,18],pyplot:2,python:[2,15,17,18],pytorch:[6,13,14,17,18,19],pytorch_to_hl:3,pyyaml:18,qkera:[3,4,6,7,14,17,19],qkeras_lay:[3,4],quadrupl:6,quantiz:[5,6,8,14,17],quantizedenseoutput:8,quartil:2,quickli:[0,1,18],rais:[4,6,11],rang:2,rankdir:11,rankin:16,rapid:14,read:[1,18],read_vivado_report:[1,9,18],real:2,realiz:14,realli:[0,14],recurr:19,redefinit:17,reduc:[2,14],ref_impl:6,refer:[0,1,4,14,17],refin:17,regist:6,register_backend:10,register_bram_vari:6,register_keras_layer_handl:4,register_lay:6,register_output_vari:6,register_pass:7,register_sourc:10,register_templ:10,register_writ:12,regular:6,rel:14,relat:[11,17],releas:19,reload:17,relu:0,relu_config3:0,remap:14,rememb:0,remov:[6,13],remove_nod:6,repack:8,repack_stream:[3,6,7],replac:6,replace_nod:6,replacemultidimensionaldensewithconv:8,repo:[11,17],report:[1,3,17,18],repositori:[18,19],repres:[0,2,6,11,14],request:18,requir:[0,6,14,18],research:16,reset:[6,13],reshap:[3,4,6,8],reshapestream:8,resiz:6,resourc:[0,2,14,17,18],respect:[6,14],respons:0,result:[0,1,2,14],result_t:0,retriev:17,reus:[0,4,11,14,17],reuse_factor:[0,6],reusefactor:[0,2,4],rewir:6,rhode:16,right:2,rivera:16,rnn:19,root:6,rounding_mod:6,rtl:[13,17,18],run:[0,2,13,14,17,18],rutger:16,ryan:16,safe:2,said:14,same:6,san:16,satisfactori:2,satur:6,saturation_bit:6,saturation_mod:6,save:[0,11,14,17],scale:[14,17],scienc:16,script:17,section:[0,1,13,18],see:[0,11,15,17,18,19],select:14,seminar:16,separ:[11,17],separableconv1d:6,separableconv2d:6,sequenc:[6,14],sequenti:14,sergo:16,serial:[4,14,17],serv:11,set:[0,1,6,11,14,18],set_attr:6,set_closest_reuse_factor:10,set_target_reuse_factor:10,setup:[0,13,14,19],sever:[1,18,19],shade:2,shape:[6,11,17],shift:17,shih:16,should:[0,4,6,14],show:[2,13,18],show_layer_nam:11,show_precis:11,show_shap:11,shown:[2,14],sigmoid:0,sigmoid_config5:0,sign:[0,6,8,14],significantli:14,similar:1,simpl:[0,1],simpli:18,simplifi:14,simul:[0,1,2,13,17],singl:14,sioni:16,sizabl:14,size:[0,6,14],size_cpp:6,skipoptim:17,smallest:10,snippet:0,softmax:[6,17],softwar:18,some:[0,2,17,18],song:16,sort:10,sourc:[10,14,15],specif:[0,11,14],specifi:[0,2,6,11,17],speed:14,speedup:14,split:14,squar:6,src:11,stabl:19,stage:0,standalon:17,start:[2,13],stem:14,step:[11,13,18],still:2,store:[0,11],store_weights_in_bram:0,str:[4,6,11],strategi:[0,17],stream:[8,17],streamvari:6,stride:[4,10],stride_height:4,stride_width:4,string:[4,6,10,11],struct:0,style:2,subgraph:11,submodul:3,subtract:17,suffici:2,suggest:0,suit:14,suitabl:6,sum:[6,14],summari:[6,19],summer:16,superced:17,suppli:[0,1],support:[0,1,11,13,17,18,19],suppos:[1,13],suppport:19,sure:2,synth:[6,18],synthes:18,synthesi:[13,14,15,17,18],tabl:19,take:[14,18],taken:14,tanh:8,target:[0,4],task:14,tcl:18,techniqu:16,templat:3,tensorflow:[13,17,19],ternari:[8,16,17],ternaryquant:5,test:[0,2,4,6,11,13,18,19],test_prj:1,tf_to_hl:[3,17],than:[0,8,17],thei:0,them:[0,1,6,17],therebi:14,therefor:14,thi:[0,1,4,6,11,13,14,18,19],those:[0,6],though:14,three:2,threshold:8,through:[0,1,17],throughout:0,throughput:14,thu:14,time:[8,14],to_fil:11,too:14,tool:[2,14,17,18,19],toolbox:18,toolkit:19,torch:18,total:0,trace:[6,17],trace_output:1,tradit:15,train:[0,2,14,17,18],tran:16,transform:[7,8],translat:[14,15,17,18],transpil:14,transpos:6,tree:16,trick:14,trigger:14,tune:11,tupl:6,tutori:18,tweak:11,twepp:16,two:[0,2,6,10],type:[0,2,4,6,11,13,17],type_definition_cpp:12,type_nam:6,typedef:0,types_boxplot:6,types_histogram:6,types_hlsmodel:6,typic:14,under:0,understand:[0,18],univers:16,unsign:0,update_precis:6,urbana:16,usag:[0,1,2,13],use:[0,1,2,10,11,13,14,15,18],use_bia:17,used:[0,1,2,4,6,8,11,14,17],useful:[1,14],user:[0,11,14,18],uses:[0,2,14],using:[0,1,2,6,14,15,16,17,18],util:[0,1,3,14,17,18],valid:[2,4,6,13,17],valid_rf:10,valu:[1,2,6,10,14],var_nam:[4,6],vari:14,variabl:[0,2,6,11],variable_definition_cpp:12,varianc:8,variou:[15,18],vector:[6,14],verbos:11,veri:1,version:[1,13,19],vertic:11,violinplot:[2,6],virtex:0,visit:[0,13,18],visual:[6,11],viti:19,vivado:[13,18,19],vivado_hl:18,vivado_report:3,vivado_synthesi:13,vivado_templ:3,vivado_writ:3,vivadobackend:10,vivadowrit:12,vladimir:16,vsynth:6,wai:0,want:[0,1,18],warn:17,washington:16,weight:[0,2,6,13,14,17,18],weight_t:[0,10],weights_hlsmodel:6,weights_kera:6,weights_torch:6,weightvari:6,welcom:0,what:[0,17],when:[0,1,2,6],where:[0,1],whether:[2,11,14],which:[0,2,6,8,10,14],whisker:2,whole:[11,13],whose:8,width:[6,14],window:19,within:0,without:[0,6,17],work:[0,11,18],workflow:18,would:[2,14,15],write:[6,13,17],write_bridg:12,write_build_script:12,write_defin:12,write_hl:12,write_nnet_util:12,write_paramet:12,write_project_cpp:12,write_project_dir:12,write_project_head:12,write_tar:12,write_test_bench:12,write_txt_fil:12,write_weight:12,write_yml:12,writer:3,writer_cl:12,www:18,xcku115:[0,4,11],xilinx:[0,18],xilinxpart:[0,4],xnor:6,xnorprecisiontyp:6,y_model:6,y_sim:6,yaml:[2,4],yet:[17,19],yml:[0,2,13,17,18],ymlfile:2,you:[0,1,2,13,15,16,17,18],your:[0,1,2,13,14,15,18],zero:2,zeropadding1d:6,zeropadding2d:6,zhenbin:16,zurich:16},titles:["Configuration","HLS Model Class","Profiling","hls4ml package","hls4ml.converters package","hls4ml.converters.keras package","hls4ml.model package","hls4ml.model.optimizer package","hls4ml.model.optimizer.passes package","hls4ml.report package","hls4ml.templates package","hls4ml.utils package","hls4ml.writer package","Command Line Interface","Concepts","Welcome to hls4ml\u2019s documentation!","Reference and Contributors","Release Notes","Setup","Status and Features"],titleterms:{"class":1,HLS:[0,1],The:14,addit:16,api:0,bn_fuse:8,bn_quant:8,build:[1,13],citat:16,clone:8,code:0,command:[13,18],compil:1,concept:14,config:[11,13],configur:0,content:[3,4,5,6,7,8,9,10,11,12],contributor:16,conv_same_pad:8,convert:[0,4,5,13],convolut:5,core:5,depend:18,detail:0,document:15,exampl:[18,19],example_model:11,exist:18,featur:19,file:0,further:18,fuse_biasadd:8,get:18,graph:5,help:18,hls4ml:[3,4,5,6,7,8,9,10,11,12,13,14,15,18],hls_layer:6,hls_model:6,how:14,inspir:14,instal:18,interfac:13,kera:5,keras_to_hl:4,layer:0,level:0,line:13,merg:5,method:1,model:[1,6,7,8,19],modul:[3,4,5,6,7,8,9,10,11,12],multi_dens:8,nop:8,note:17,onnx_to_hl:4,optim:[7,8],option:18,overview:13,packag:[3,4,5,6,7,8,9,10,11,12],pass:8,per:0,plot:11,pointwis:8,pool:5,predict:1,present:16,profil:[2,6],project:15,python:0,pytorch_to_hl:4,qkera:[5,8],qkeras_lay:5,quick:18,refer:16,releas:17,repack_stream:8,report:[9,13],reshap:5,setup:18,solut:14,start:18,statu:[15,19],submodul:[4,5,6,7,8,9,10,11,12],subpackag:[3,4,6,7],talk:16,templat:10,tf_to_hl:4,top:0,trace:1,tutori:15,uninstal:18,util:11,vivado_report:9,vivado_templ:10,vivado_writ:12,welcom:15,work:14,write:1,writer:12,yaml:0}})