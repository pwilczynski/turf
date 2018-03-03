import { Feature, Geometry} from '@turf/helpers';

/**
 * http://turfjs.org/docs/#booleanWithin
 */

export  function booleanWithin(
    feature1: Feature<any> | Geometry, feature2: Feature<any> | Geometry): boolean